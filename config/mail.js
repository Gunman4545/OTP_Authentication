//Test Mail sending Module
const nodeMailer = require("nodemailer");

const sendEmail = async (email,otp) => {
  // test account for sending mails
  let testAccount = await nodeMailer.createTestAccount();

  // creating transporter for mailing

  let transporter = nodeMailer.createTransport({
    service: 'Gmail',
    //secure: false, // true for 465, false for other ports
    auth: {
      user: 'abhirupvm01@gmail.com', // generated ethereal user
      pass: 'svhfhsmkhbygkqim', // generated ethereal password
    },
  });

  // mail sending info 

  let info = await transporter.sendMail({
      from : '"OTP Service" <otp@example.com',
      to : email,
      subject : "OTP for Login",
      text : `Otp for login is ${otp}`,
      html : `Your Otp for login is <b>${otp}<b>`
  });

  console.log('OTP sent');

  let url = nodeMailer.getTestMessageUrl(info);
  console.log('The mail Can be viewed At : \n');
  console.log(url);

    
};

module.exports = {
  sendEmail: sendEmail,
};
