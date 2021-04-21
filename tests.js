"use strict";
const nodemailer = require("nodemailer");
const { USER_EMAIL, USER_PASSWORD } = require("./config");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
    user: USER_EMAIL, // generated ethereal user
    pass: USER_PASSWORD, // generated ethereal password
    },
  });

  transporter.verify().then(() =>{
    console.log("Conexión del envio de emails correcto");
})

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Gestion RtR API 👻" <gestions.rtr@gmail.com>', // sender address
    to: "tonyffer7@hotmail.com, johana.cordobal@udea.edu.co", // list of receivers
    subject: "Aviso sobre servicios pendientes", // Subject line
    text: "Por favor revisar sección de cronogramas en la aplicación Gestión RtR.\n\n Hay servicios pendientes para esta semana. ", // plain text body
    html: "<b>Por favor revisar sección de cronogramas en la aplicación Gestión RtR.<br><br>Hay servicios pendientes para esta semana. </b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
