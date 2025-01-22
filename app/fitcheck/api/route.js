import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'mail.hordozaskeszthely.hu', 
  port: 465,
  secure: true,
  auth: {
    user: 'fitcheck@hordozaskeszthely.hu',
    pass: 'N8QtBC3FqGm9RYt'
  }
});
 
export const POST = async (req) => { 
  const formData = await req.formData();

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
    from: 'fitcheck@hordozaskeszthely.hu',
    to: 'hordozaskeszthely@gmail.com',
    subject: 'Form Submission with Files',
    html: `
            <p>Email: ${formData.get('email')} </p>
            <p>Name: ${formData.get('name')} </p>
            <p>babyAge: ${formData.get('babyAge')} </p>
            <p>babyWeight: ${formData.get('babyWeight')} </p>
            <p>description: ${formData.get('description')} </p>
            `,
    attachments
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}