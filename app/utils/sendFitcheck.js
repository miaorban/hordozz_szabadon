import nodemailer from 'nodemailer';
import renderEmailTemplate from '../components/email/fitcheck';
import { render } from '@react-email/components';

const sendEmail = async ({ link, email, name, file }) => {
  const transporter = nodemailer.createTransport({
      host: process.env.MAIL_DOMAIN, 
      port: 465,
      secure: true,
      auth: {
          user: process.env.MAIL_EMAIL,
          pass: process.env.MAIL_PASS
      }
    });

  const html = await render(renderEmailTemplate({link, name}));

  const arrayBuffer = await file.arrayBuffer();
  const fileBuffer = Buffer.from(arrayBuffer);
  
  const mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: email,
    cc: 'miaorban@gmail.com',
    subject: 'Fitcheck válaszvideó',
    html,
    attachments: [
      {
        filename: 'szamla.pdf',
        content: fileBuffer,
      }
    ]
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;