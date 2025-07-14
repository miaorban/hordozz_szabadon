export const dynamic = "force-dynamic";
// Imports the Google Cloud client library
import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';
import { logger } from '@/app/winston';

// Creates a client
const storage = process.env.NODE_ENV === 'development' 
  ? new Storage({
      projectId: "hordozz-szabadon",
      keyFilename: "hordozz-szabadon-4ee8806bc94e.json"
    })
  : new Storage();

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

    // Get a v4 signed URL for reading the file
    const [url] = await storage
      .bucket('fitcheck_photos')
      .file(`${folderName}/${fileName}`)
      .getSignedUrl(options);

    logger.info('Generated GET signed URL:', { url });
    
    return url;
  } catch (error) {
    logger.error('Error generating signed URL:', { error: error.message });
    return null;
  }
}

