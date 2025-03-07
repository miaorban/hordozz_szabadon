// import nodemailer from 'nodemailer';
// import renderEmailTemplate from '../utils/fitcheck';

// const sendEmail = async (to, subject, title, message) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_DOMAIN,
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.MAIL_EMAIL,
//       pass: process.env.MAIL_PASS,
//     },
//   });

//   const html = renderEmailTemplate(title, message);

//   const mailOptions = {
//     from: process.env.MAIL_EMAIL,
//     to,
//     subject,
//     html,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.messageId);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// export default sendEmail;