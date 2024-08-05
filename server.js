const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/minecraftServer', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    verified: Boolean
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, verified: false });
    await newUser.save();
    
    // Gửi email xác nhận
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Email Verification',
        text: 'Please verify your email by clicking on the following link: http://localhost:3000/verify-email?email=' + email
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.send('Registration successful! Please check your email to verify your account.');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        if (user.verified) {
            res.send('Login successful!');
        } else {
            res.send('Please verify your email before logging in.');
        }
    } else {
        res.send('Invalid email or password.');
    }
});

app.get('/verify-email', async (req, res) => {
    const { email } = req.query;
    await User.updateOne({ email }, { verified: true });
    res.send('Email verified successfully! You can now log in.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
