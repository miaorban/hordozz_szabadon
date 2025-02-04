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
  logger.info('POST /api/fitcheck');

  try {
    const formData = await req.formData();
    logger.info('fitcheck form data', { formData });

    const sanitize = (str) => str;

    const email = sanitize(formData.get('email'));
    const name = sanitize(formData.get('name'));
    const babyAge = sanitize(formData.get('babyAge'));
    const babyWeight = sanitize(formData.get('babyWeight'));
    const carrierType = sanitize(formData.get('carrierType'));
    const description = sanitize(formData.get('description'));

    logger.info('fitcheck sanitized data', {
      email,
      name,
      babyAge,
      babyWeight,
      carrierType,
      description
    });
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
    const referenceId = Math.random().toString(36).substring(7);
    logger.info('fitcheck referenceId', { referenceId });
    const mailOptions = {
      from: process.env.MAIL_EMAIL,
      to: 'miaorban@gmail.com',
      subject: 'Form Submission with Files',
      html: `
              <p>Email: ${email} </p>
              <p>referenceId: ${referenceId} </p>
              <p>Name: ${name} </p>
              <p>babyAge: ${babyAge} </p>
              <p>babyWeight: ${babyWeight} </p>
              <p>carrierType: ${carrierType} </p>
              <p>description: ${description} </p>
              `,
      attachments
    };

    await transporter.sendMail(mailOptions);
    logger.info('Mail sent successfully');
    return NextResponse.json({ referenceId });
  } catch (error) {
    logger.error('Error sending mail:', { error });
    return NextResponse.json({ error }, { status: 500 });
  }
}