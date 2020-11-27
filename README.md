Node.js Contacts form to email handler
==============================================

Overview
--------

This project is the simplest Node.js solution that aims to serve as a Backend API to collect users messages and inquiries from your websites Contact forms and send it over to your email.

The steps to deploy this solution and use it for your website are dead simple:

1.  Deploy the current repo on any Node.js hosting (no extra code changes or settings required).
 - Free hostings that you might consider are: [Heroku](https://heroku.com) and [Glitch](https://glitch.com).
    
2.  Create `.env` file with your email credentials or directly add required environment variables to your production server as shown in `Integration` part of this guide.

3.  In case you want to change email format or add/remove fields, fork this project and modify accordingly.

4.  Deploy your changes and/or environment variables.

5.  Connect your website to the API by sending POST request to following link: `your-mail-handler-link.com/email`

6.  Test it!

Integration
-----------

To connect to your email server you will need to provide the following environment variables either in your host settings or inside an environment file `.env`

    TO_EMAIL=your-destination-email@email.com
    FROM_EMAIL=your-sender-email@email.com // this is your email that you will authenticate and use to redirect the messages to your destination email
    FROM_PASS=your-sender-email-password // depending on the email server you use, it might need to be generated separately for each application
    EMAIL_SERVICE=your-email-server // be default nodemailer will automatically find and use SMTP connection settings if the mail server is supported and known. In case if it's not known, you will need to provide SMTP connection settings by yourself.

[List of well-know email services for Nodemailer](https://nodemailer.com/smtp/well-known/)
