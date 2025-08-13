import { Storage } from '@google-cloud/storage';
import { logger } from '@/app/winston';

class BucketService {
  constructor() {
    // Initialize GCP Storage
    const credentials = JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_JSON, 'base64').toString('utf-8'));
    this.storage = new Storage({
      projectId: process.env.GCP_PROJECT_ID,
      credentials
    });
    this.bucketName = 'fitcheck_photos';
  }

  /**
   * List all images in a fitcheck folder
   * @param {string} fitcheckId - The fitcheck ID (folder name)
   * @returns {Promise<Array>} Array of image file names
   */
  async listImages(fitcheckId) {
    try {
      logger.info('Listing images for fitcheck:', { fitcheckId });
      
      const [files] = await this.storage
        .bucket(this.bucketName)
        .getFiles({ prefix: `${fitcheckId}/` });

      // Extract just the file names (remove folder prefix)
      const imageFiles = files.map(file => {
        const fileName = file.name.replace(`${fitcheckId}/`, '');
        return fileName;
      }).filter(fileName => fileName !== ''); // Remove empty strings

      logger.info('Found images:', { fitcheckId, count: imageFiles.length, files: imageFiles });
      return imageFiles;
    } catch (error) {
      logger.error('Error listing images:', { 
        error: error.message, 
        stack: error.stack,
        fitcheckId 
      });
      return [];
    }
  }

  /**
   * Generate a read signed URL for an image
   * @param {string} fitcheckId - The fitcheck ID (folder name)
   * @param {string} fileName - The image file name
   * @returns {Promise<string>} Signed URL for reading the image
   */
  async generateReadSignedUrl(fitcheckId, fileName) {
    try {
      const options = {
        version: 'v4',
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      };

      logger.info('Generating read signed URL:', { fitcheckId, fileName });
      
      const [url] = await this.storage
        .bucket(this.bucketName)
        .file(`${fitcheckId}/${fileName}`)
        .getSignedUrl(options);

      logger.info('Generated read signed URL:', { url });
      return url;
    } catch (error) {
      logger.error('Error generating read signed URL:', { 
        error: error.message, 
        stack: error.stack,
        fitcheckId, 
        fileName 
      });
      return null;
    }
  }
}

export default BucketService; 