export const dynamic = 'force-dynamic'
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import { logger } from '@/app/winston';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_DOMAIN, 
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASS
  }
});
 
export const POST = async (req) => { 
  logger.info('POST /api/photos');

  try {
    const formData = await req.formData();
    logger.info('photos email', { email: formData.get('email') });

    const attachments = []
    // Get all image Files from form data
    for(const pair of formData.entries())
    {
      if (pair[1] instanceof File) {
        const attachment = {
          filename: pair[1].name,
          // Use buffer to retrieve data from file
          content: Buffer.from(await pair[1].arrayBuffer()),
          contentType: pair[1].type
        };
        
        attachments.push(attachment);
      }
    }

    const mailOptions = {
      from: process.env.MAIL_EMAIL,
      to: 'mia@hordozzszabadon.hu',
      subject: 'Form Submission with Files',
      html: `
              <p>Email: ${formData.get('email')} </p>
              `,
      attachments
    };

    // let info;
    let error, info;
    for (let i = 0; i < 3; i++) {
      try {
        info = await transporter.sendMail(mailOptions);
        logger.info('Photo sent successfully', { email: formData.get('email') });
        break;
      } catch (e) {
        error = e;
      }
    }
    
    if (info) {
      logger.info('Photo sent successfully', { email: formData.get('email') });
      return NextResponse.json({ message: 'Mail sent successfully' });
    } else {
      logger.error('Error sending mail:', { error });
      return NextResponse.json({ error }, { status: 500 });
    }
  } catch (error) {
    logger.error('Error sending mail:', { error });
    return NextResponse.json({ error }, { status: 500 });
  }
}