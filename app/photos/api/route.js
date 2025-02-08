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
    logger.info('fitcheck attachments', { attachments });

    const mailOptions = {
      from: process.env.MAIL_EMAIL,
      to: 'miaorban@gmail.com',
      subject: 'Form Submission with Files',
      html: `
              <p>Email: ${formData.get('email')} </p>
              `,
      attachments
    };
    logger.info('mail sent with attachment', { email: formData.get('email') });
    await transporter.sendMail(mailOptions);
    logger.info('Mail sent successfully');
    return NextResponse.json({ message: 'Mail sent successfully' });
  } catch (error) {
    logger.error('Error sending mail:', { error });
    return NextResponse.json({ error }, { status: 500 });
  }
}