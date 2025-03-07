import nodemailer from 'nodemailer';
import renderEmailTemplate from '../components/email/fitcheck';

const sendEmail = async ({link, email }) => {
  const transporter = nodemailer.createTransport({
      host: process.env.MAIL_DOMAIN, 
      port: 465,
      secure: true,
      auth: {
          user: process.env.MAIL_EMAIL,
          pass: process.env.MAIL_PASS
      }
    });

  const html = renderEmailTemplate(link);

  const mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: email,
    subject: 'Fitcheck',
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