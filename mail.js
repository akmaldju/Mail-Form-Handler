const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
//let testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.FROM_EMAIL || testAccount?.user,
        pass: process.env.FROM_PASS || testAccount?.pass
    }
});

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: process.env.TO_EMAIL,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });

    // send mail with defined transport object
    // let info = await transporter.sendMail({
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: "bar@example.com, baz@example.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    // });
}

// Exporting the sendmail
module.exports = sendMail;