export const dynamic = "force-dynamic";
// Imports the Google Cloud client library
import { Storage } from '@google-cloud/storage';

// Creates a client
// const storage = new Storage({
//   projectId: "hordozz-szabadon",
//   keyFilename: "hordozz-szabadon-2e1dba8b7352.json"
// });

const storage = new Storage();

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fitcheckId = searchParams.get('fitcheckId');
    const photoCount = searchParams.get('photoCount');
    console.log('GET /api/fitcheck/file-uploader', { fitcheckId, photoCount });
    for (let i = 0; i < photoCount; i++) {
      generateV4ReadSignedUrl(fitcheckId, i);
    }
    

    return new Response({ fitcheckId, photoCount });
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

    console.log('Generated GET signed URL:');
    console.log(url);
    console.log('You can use this URL with any user agent, for example:');
    console.log(`curl '${url}'`);
    
    return url;
  } catch (error) {
    console.error('Error generating signed URL:', error);
    return null;
  }
}

