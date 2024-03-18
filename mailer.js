import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    auth: {
        user: 'theuserofworld9@gmail.com', 
        pass: 'xklvfmnefzegetwr' 
    }
});

const sendMail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: 'theuserofworld9@gmail.com',
            to, 
            subject, 
            text 
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export { sendMail };
