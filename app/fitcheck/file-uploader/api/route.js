export const dynamic = "force-dynamic";
// Imports the Google Cloud client library
import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';
import { logger } from '@/app/winston';

const credentials = JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_JSON, 'base64').toString('utf-8'))

console.log(credentials);

// Use service account key for development, OIDC for production
const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials
})

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fitcheckId = searchParams.get('fitcheckId');
    const photoCount = searchParams.get('photoCount');
    logger.info('GET /api/fitcheck/file-uploader', { fitcheckId, photoCount });
    
    const urls = [];
    for (let i = 0; i < photoCount; i++) {
      urls.push(generateV4ReadSignedUrl(fitcheckId, i));
    }
    
    const result = await Promise.all(urls);
    logger.info('Generated signed URLs', { result });
    return NextResponse.json({ urls: result });
}

async function generateV4ReadSignedUrl(folderName, fileName) {
  try {
    // These options will allow temporary read access to the file
    const options = {
      version: 'v4',
      action: 'read',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    };

    logger.info('Attempting to generate signed URL:', { folderName, fileName });
    
    // Get a v4 signed URL for reading the file
    const [url] = await storage
      .bucket('fitcheck_photos')
      .file(`${folderName}/${fileName}`)
      .getSignedUrl(options);

    logger.info('Generated GET signed URL:', { url });
    
    return url;
  } catch (error) {
    logger.error('Error generating signed URL:', { 
      error: error.message, 
      stack: error.stack,
      folderName, 
      fileName 
    });
    return null;
  }
}

