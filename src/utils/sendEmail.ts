import * as nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
export const sendEmail = async (email: string, link: string) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  // send mail with defined transport object
  let info = null;

  try {
    info = await transporter.sendMail({
      from: '"Adireto 👻"', // sender address
      to: email, // list of receivers
      subject: 'Amigo Secreto - Veja quem você tirou no Amigo Secreto ✔', // Subject line
      text: 'Seu amigo secreto é: ', // plain text body
      html: `<b>Seu amigo secreto é: </b> <a>${link}</a>`, // html body
    });
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log('SENDING ERROR MESSAGE: ' + error.message);
  }
};
