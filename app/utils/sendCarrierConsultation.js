import nodemailer from 'nodemailer';
import renderEmailTemplate from '../components/email/hordozovalaszto';
import { render } from '@react-email/components';

const sendEmail = async (data, file) => {
  const transporter = nodemailer.createTransport({
      host: process.env.MAIL_DOMAIN, 
      port: 465,
      secure: true,
      auth: {
          user: process.env.MAIL_EMAIL,
          pass: process.env.MAIL_PASS
      }
    });

  const html = await render(renderEmailTemplate(data));

   
  let attachments = [];
  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);
    attachments = [
      {
        filename: 'szamla.pdf',
        content: fileBuffer,
      }
    ]
  }
  
  const mailOptions = {
    from: `Mia - [Hordozz Szabadon] <${process.env.MAIL_EMAIL}>`,
    to: data.email,
    cc: 'miaorban@gmail.com',
    subject: 'A hozzátok illő hordozók',
    html,
    attachments
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;