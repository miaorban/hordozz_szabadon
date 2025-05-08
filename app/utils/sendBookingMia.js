import nodemailer from 'nodemailer';
import renderEmailTemplate from '../components/email/booking_received_mia';
import { render } from '@react-email/components';

const sendEmail = async (data) => {
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
  
  const mailOptions = {
    from: `Mia - [Hordozz Szabadon] <${process.env.MAIL_EMAIL}>`,
    to: 'miaorban@gmail.com',
    subject: 'Időpontfoglalás értesítő',
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;