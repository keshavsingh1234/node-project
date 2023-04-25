const nodemailer=require("nodemailer");
const Sendmail=async(req,res) =>{
    let testAccount = await nodemailer.createTestAccount();
    //connect with smtp
    let transport = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "floy.marvin@ethereal.email", // generated ethereal user
          pass: "fZh5syTAgkEyxTrSUr", // generated ethereal password
        },
      });

      let info = await transport.sendMail({
        from: '"keshav 👻" <sunnygmail.com>', // sender address
        to: `${idmilgayi.email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      
  //console.log("Message sent: %s", info.messageId);
    res.json(info)
};

module.exports=Sendmail