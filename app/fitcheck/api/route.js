export const dynamic = 'force-dynamic'

import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";


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
  const formData = await req.formData();

  console.log('Form Data:', Array.from(formData.entries()));

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

  const referenceId = Math.random().toString(36).substring(7);
  const mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: 'miaorban@gmail.com',
    subject: 'Form Submission with Files',
    html: `
            <p>Email: ${formData.get('email')} </p>
            <p>referenceId: ${referenceId} </p>
            <p>Name: ${formData.get('name')} </p>
            <p>babyAge: ${formData.get('babyAge')} </p>
            <p>babyWeight: ${formData.get('babyWeight')} </p>
            <p>carrierType: ${formData.get('carrierType')} </p>
            <p>description: ${formData.get('description')} </p>
            `,
    attachments
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ referenceId });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}