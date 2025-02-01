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
