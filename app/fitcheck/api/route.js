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
  logger.info('POST /api/fitcheck', { req });

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
    const photoCount = sanitize(formData.get('photoCount'));
    const fitcheckId = sanitize(formData.get('fitcheckId'));

    logger.info('fitcheck sanitized data', {
      email,
      name,
      babyAge,
      babyWeight,
      carrierType,
      description
    });
    logger.info('fitcheck fitcheckId', { fitcheckId });

    const mailOptions = {
      from: `Mia - [Hordozz Szabadon] <${process.env.MAIL_EMAIL}>`,
      to: 'mia@hordozzszabadon.hu',
      subject: 'Fitcheck érkezett',
      html: `
              <p>Email: ${email} </p>
              <p>fitcheckId: ${fitcheckId} </p>
              <p>Name: ${name} </p>
              <p>babyAge: ${babyAge} </p>
              <p>babyWeight: ${babyWeight} </p>
              <p>carrierType: ${carrierType} </p>
              <p>photoCount: ${photoCount} </p>
              <p>description: ${description} </p>
              `
    };

    await transporter.sendMail(mailOptions);
    
    logger.info('Mail sent successfully');
    return NextResponse.json({ fitcheckId });
  } catch (error) {
    logger.error('Error sending mail:', { error });
    return NextResponse.json({ error }, { status: 500 });
  }
}