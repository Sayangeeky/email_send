const nodemailer = require('nodemailer')
require('dotenv').config()

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // Set to true if using SSL/TLS
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
})

const sendEmail = async ({ recipients, subject, message }) => {
    await transport.sendMail({
        from: 'no-reply@example.com',
        to: recipients,
        subject,
        text: message,
        html: `<p>${message}</p>`,
    })
}

module.exports = { sendEmail }
