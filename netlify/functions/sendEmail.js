const nodemailer = require("nodemailer");
// require("dotenv").config(); // Load environment variables from .env file

exports.handler = async function (event) {
    try {
        const formData = JSON.parse(event.body);

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.GMAIL_USER, 
                pass: process.env.GMAIL_PASS, 
            },
        });

        const mailOptions = {
            from: formData.email,
            to: "hannarosenfeld@gmail.com",
            subject: "Contact Form Submission",
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message }),
        };
    }
};
