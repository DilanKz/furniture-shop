const nodemailer = require('nodemailer');

const mailSender = {
    sendMail: async function (mailOptions) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'falonh45@gmail.com',
                pass: 'flse ipcs bubb tjfh',
            },
        });

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            return { success: true, message: 'Email sent successfully' };
        } catch (error) {
            console.error('Error sending email:', error);
            return { success: false, error: 'Internal server error' };
        }
    },
};

module.exports = mailSender;
