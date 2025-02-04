
// import { LoggingWinston } from "@google-cloud/logging-winston";
import winston from "winston";

// const loggingWinston = new LoggingWinston({
//   projectId: process.env.GCP_PROJECT_ID,
//   credentials: {
//     client_email: process.env.GCP_SA_CLIENT_EMAIL,
//     private_key: process.env.GCP_PRIVATE_KEY.split(`\n`).join('\n'),
//   }
// });

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    // loggingWinston,
  ],
});

export { logger };