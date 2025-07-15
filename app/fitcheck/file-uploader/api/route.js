export const dynamic = "force-dynamic";
// Imports the Google Cloud client library
import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';
import { logger } from '@/app/winston';

// Use service account key for development, OIDC for production
const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    "type": "service_account",
    "project_id": process.env.GCP_PROJECT_ID,
    "private_key_id": process.env.GCP_PRIVATE_KEY_ID,
    "private_key": process.env.GCP_PRIVATE_KEY,
    "client_email": process.env.GCP_SERVICE_ACCOUNT_EMAIL,
    "client_id": process.env.GCP_CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": process.env.GCP_CLIENT_X509_CERT_URL,
    "universe_domain": "googleapis.com"
  }
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

