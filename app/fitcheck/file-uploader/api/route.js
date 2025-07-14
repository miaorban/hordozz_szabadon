export const dynamic = "force-dynamic";
// Imports the Google Cloud client library
import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';
import { logger } from '@/app/winston';
import { getVercelOidcToken } from '@vercel/functions/oidc';
import { ExternalAccountClient } from 'google-auth-library';

const GCP_PROJECT_ID = process.env.GCP_PROJECT_ID;
const GCP_PROJECT_NUMBER = process.env.GCP_PROJECT_NUMBER;
const GCP_SERVICE_ACCOUNT_EMAIL = process.env.GCP_SERVICE_ACCOUNT_EMAIL;
const GCP_WORKLOAD_IDENTITY_POOL_ID = process.env.GCP_WORKLOAD_IDENTITY_POOL_ID;
const GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID =
  process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID;
  
// Debug environment variables
logger.info('GCP Environment Variables:', {
  GCP_PROJECT_ID: !!GCP_PROJECT_ID,
  GCP_PROJECT_NUMBER: !!GCP_PROJECT_NUMBER,
  GCP_SERVICE_ACCOUNT_EMAIL: !!GCP_SERVICE_ACCOUNT_EMAIL,
  GCP_WORKLOAD_IDENTITY_POOL_ID: !!GCP_WORKLOAD_IDENTITY_POOL_ID,
  GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID: !!GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID,
  NODE_ENV: process.env.NODE_ENV
});

// Initialize the External Account Client
const authClient = ExternalAccountClient.fromJSON({
  type: 'external_account',
  audience: `//iam.googleapis.com/projects/${GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,
  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
  token_url: 'https://sts.googleapis.com/v1/token',
  service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${GCP_SERVICE_ACCOUNT_EMAIL}:generateAccessToken`,
  subject_token_supplier: {
    // Use the Vercel OIDC token as the subject token
    getSubjectToken: getVercelOidcToken,
  },
});

logger.info('Auth client initialized:', { authClientType: authClient.constructor.name });


// Use service account key for development, OIDC for production
const storage = process.env.NODE_ENV === 'development' 
  ? new Storage()
  : new Storage({
    googleAuthOptions: {
      authClient,
      projectId: GCP_PROJECT_ID,
    }
  });

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

