import databaseService from '@/app/utils/databaseService';
import { logger } from '@/app/winston';
import BucketService from '@/app/utils/BucketService';

class FitcheckService {
  constructor() {
    this.bucketService = new BucketService();
  }

  /**
   * Create a new fitcheck
   * @param {Object} fitcheckData - The fitcheck data to create
   * @returns {Promise<Object>} The created fitcheck
   */
  async create(fitcheckData) {
    logger.info('Creating fitcheck:', fitcheckData);
    return await databaseService.query(`
      INSERT INTO fitcheck (
        email, 
        name, 
        baby_age, 
        baby_weight, 
        carrier_type, 
        description, 
        photo_count, 
        fitcheck_id
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
      [
        fitcheckData.email, 
        fitcheckData.name, 
        fitcheckData.babyAge, 
        fitcheckData.babyWeight, 
        fitcheckData.carrierType, 
        fitcheckData.description, 
        fitcheckData.photoCount, 
        fitcheckData.fitcheckId
      ]
    );
  }

  /**
   * List all fitchecks
   * @param {Object} options - Query options (filters, pagination, etc.)
   * @returns {Promise<Array>} Array of fitchecks
   */
  async list() {
    return databaseService.query(`SELECT * FROM fitcheck`);
  }

  /**
   * Get a fitcheck by ID
   * @param {string|number} id - The fitcheck ID
   * @returns {Promise<Object|null>} The fitcheck object or null if not found
   */
  async getById(id) {
    const results = await databaseService.query(`SELECT * FROM fitcheck WHERE fitcheck_id = ?`, [id]);
    return results.length > 0 ? results[0] : null;
  }

  /**
   * Get images for a fitcheck
   * @param {string} fitcheckId - The fitcheck ID
   * @returns {Promise<Array>} Array of image URLs
   */
  async getImages(fitcheckId) {
    try {
      const imageFiles = await this.bucketService.listImages(fitcheckId);
      
      if (imageFiles.length === 0) {
        return [];
      }

      // Generate read signed URLs for each image
      const imageUrls = await Promise.all(
        imageFiles.map(fileName => 
          this.bucketService.generateReadSignedUrl(fitcheckId, fileName)
        )
      );

      // Filter out any failed URL generations
      return imageUrls.filter(url => url !== null);
    } catch (error) {
      logger.error('Error getting images:', { 
        error: error.message, 
        stack: error.stack,
        fitcheckId 
      });
      return [];
    }
  }

  /**
   * Add response URL to a fitcheck
   * @param {string} fitcheckId - The fitcheck ID
   * @param {string} responseUrl - The response URL to save
   * @returns {Promise<Object>} Updated fitcheck data
   */
  async addResponseUrl(fitcheckId, responseUrl) {
    try {
      logger.info('Adding response URL to fitcheck:', { fitcheckId, responseUrl });
      
      const result = await databaseService.query(`
        UPDATE fitcheck 
        SET response_url = ? 
        WHERE fitcheck_id = ?
      `, [responseUrl, fitcheckId]);

      if (result.affectedRows === 0) {
        throw new Error('No fitcheck found with the specified ID');
      }

      logger.info('Response URL added successfully:', { fitcheckId, responseUrl });
      return { success: true, fitcheckId, responseUrl };
    } catch (error) {
      logger.error('Error adding response URL:', { 
        error: error.message, 
        stack: error.stack,
        fitcheckId, 
        responseUrl 
      });
      throw error;
    }
  }
}

export default FitcheckService; 