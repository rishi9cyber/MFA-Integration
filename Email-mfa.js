const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

app.get('/send-otp', (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'user-email@example.com',
        subject: 'Your OTP for MFA',
        text: `Your OTP is ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send('Error sending OTP');
        } else {
            res.send('OTP sent successfully!');
        }
    });
});

app.listen(3000, () => {
    console.log('MFA server running on http://localhost:3000');
});
