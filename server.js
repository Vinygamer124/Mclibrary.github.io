const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Configure session middleware
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Serve static files
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
    // Here you would normally check the credentials in your database
    const { loginEmail, loginPassword } = req.body;
    // Simulate successful login
    req.session.user = { email: loginEmail };
    res.redirect('/');
});

// Handle registration form submission
app.post('/register', (req, res) => {
    // Here you would normally save the user details to your database
    const { username, email, password } = req.body;
    // Simulate successful registration
    req.session.user = { email };
    res.redirect('/');
});

// Handle logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});