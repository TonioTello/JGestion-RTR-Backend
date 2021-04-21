"use strict";
const nodemailer = require("nodemailer");
const { USER_EMAIL, USER_PASSWORD } = require("./config");

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
        subject: "Alerta de servicios ✔", // Subject line
        text: "Hello world? Alerta de servicios", // plain text body
        html: "<b>Hello world?</b>", // html body
      });