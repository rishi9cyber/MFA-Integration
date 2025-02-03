# Multi-Factor Authentication (MFA) Integration

## Overview
This project demonstrates the implementation of **Multi-Factor Authentication (MFA)** using **SMS** and **email** as second factors. It showcases how MFA enhances security by requiring users to verify their identity through multiple channels.

## Key Features
- **SMS-based MFA**: Send a one-time password (OTP) to the user’s phone.
- **Email-based MFA**: Send a one-time password (OTP) to the user’s email.
- **Secure Authentication**: Protect user accounts with an additional layer of security.

## Use Cases
- Enterprise applications requiring enhanced security.
- Cloud-based services needing secure user authentication.
- Compliance with security standards like GDPR and HIPAA.

## Technologies Used
- **Node.js/Express.js**: For building the web app.
- **Twilio**: For sending SMS (optional).
- **Nodemailer**: For sending emails (optional).

## How It Works
1. The user logs in with their username and password.
2. The system sends a one-time password (OTP) to the user’s phone or email.
3. The user enters the OTP to complete the login process.
4. The user gains access to the application.

## Code Examples

### Node.js (SMS-based MFA) & (Email-based MFA)
```javascript
const express = require('express');
const twilio = require('twilio');

const app = express();
const client = twilio('YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN');

app.get('/send-otp', (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    client.messages.create({
        body: `Your OTP is ${otp}`,
        from: '+1234567890', // Your Twilio phone number
        to: '+0987654321'    // User's phone number
    }).then(() => {
        res.send('OTP sent successfully!');
    });
});

app.listen(3000, () => {
    console.log('MFA server running on http://localhost:3000');
});

Node.js (Email-based MFA)
javascript

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
