export const dynamic = "force-dynamic";
// Imports the Google Cloud client library
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
    const { fitcheckId, fileName } = await request.json();
    logger.info('GET /api/fitcheck/file-uploader', { fitcheckId, fileName });
    
   const url = await generateV4ReadSignedUrl(fitcheckId, fileName);
    
    logger.info('Generated signed URL', { url });
    return NextResponse.json(url);
}

async function generateV4ReadSignedUrl(folderName, fileName) {
  try {
    // These options will allow temporary read access to the file
    const options = {
      version: 'v4',
      action: 'write',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      contentType: 'multipart/form-data',
    };

    logger.info('Attempting to generate signed URL:', { folderName, fileName });
    
    // Get a v4 signed URL for reading the file
    const [url] = await storage
      .bucket('fitcheck_photos')
      .file(`${folderName}/${fileName}`)
      .getSignedUrl(options);

    console.log('Generated PUT signed URL:');
    console.log(url);
    console.log('You can use this URL with any user agent, for example:');
    console.log(
      "curl -X PUT -H 'Content-Type: multipart/form-data' " +
      `--upload-file my-file '${url}'`
    );

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

