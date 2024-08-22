const express = require('express')
const { sendEmail } = require('./mail')

const app = express()
app.use(express.json())

app.post('/send-email', async (req, res) => {
    const { name, email } = req.body
    const subject = "Welcome"
    const message = "Welcome to the world of developers"

    const recipients = `${name} <${email}>`

    try {
        await sendEmail({ recipients, subject, message })
        res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
        console.error('Error sending email:', error)
        res.status(500).json({ error: 'Failed to send email' })
    }
})

module.exports = app
