const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser'); // Thêm dòng này
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;

const app = express();

// Cấu hình body-parser middleware để xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: true }));

// Configure session middleware
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Serialize user info
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Configure Google OAuth2 strategy
passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Configure Discord strategy
passport.use(new DiscordStrategy({
    clientID: 'DISCORD_CLIENT_ID',
    clientSecret: 'DISCORD_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/auth/discord/callback',
    scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Google authentication routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
});

// Discord authentication routes
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
});

// Logout route
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Basic route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route để xử lý form đăng ký
app.post('/register', (req, res) => {
    // Xử lý dữ liệu đăng ký
    const { username, email, password, terms } = req.body;
    console.log('User registered with:', { username, email, password, terms });
    res.send('Đăng ký thành công!');
});

// Route để xử lý form đăng nhập
app.post('/login', (req, res) => {
    // Xử lý dữ liệu đăng nhập
    const { loginEmail, loginPassword } = req.body;
    console.log('User logged in with:', { loginEmail, loginPassword });
    res.send('Đăng nhập thành công!');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});