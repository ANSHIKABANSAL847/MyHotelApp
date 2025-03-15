// controllers/mailController.js
const nodemailer = require('nodemailer');

sendContactMail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bansalanshika847@gmail.com', // Admin email
        pass: 'amdytokxhjlhutub', // App password if 2FA enabled
      },
    });

    const mailOptions = {
      from: email,
      to: 'youradminemail@gmail.com', // Admin email
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendContactMail };