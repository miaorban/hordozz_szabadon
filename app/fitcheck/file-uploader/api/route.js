export const dynamic = "force-dynamic";
import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';
import { logger } from '@/app/winston';

const credentials = JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_JSON, 'base64').toString('utf-8'))

// Use service account key for development, OIDC for production
const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials
})

export async function POST(request) {
  const { fileNames } = await request.json();
  const fitcheckId = Math.random().toString(36).substring(7);
  logger.info('GET /api/fitcheck/file-uploader', { fitcheckId, fileNames });
  
  const urlPromises = [];
  for (const fileName of fileNames) {
    const url = generateV4ReadSignedUrl(fitcheckId, fileName);
    urlPromises.push(url);
  }
    
  const urls = await Promise.all(urlPromises);
  logger.info('Generated signed URL', { fitcheckId, urls });
  return NextResponse.json({ fitcheckId, urls });
}

async function generateV4ReadSignedUrl(folderName, fileName) {
  try {
    // These options will allow temporary read access to the file
    const options = {
      version: 'v4',
      action: 'write',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      contentType: 'application/octet-stream',
    };

    logger.info('Attempting to generate signed URL:', { folderName, fileName });
    
    // Get a v4 signed URL for reading the file
    const [url] = await storage
      .bucket('fitcheck_photos')
      .file(`${folderName}/${fileName}`)
      .getSignedUrl(options);

    logger.info('Generated PUT signed URL:', { url });

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

