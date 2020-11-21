const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Configuring our data parsing
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    // res.sendFile(path.join(__dirname + '/contact-us.html'));
    //send email here
    const { name, subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: err });
        } else {
            res.status(200).send({ message: 'Email sent successfully!' });
        }
    });
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => log('Server is starting on PORT,', 8080));