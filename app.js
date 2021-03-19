const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/availability', (req, res) => {
    res.render('availability')
})

app.get('/contacts', (req, res) => {
    res.render('contacts');
})

app.get('/forgotPassword', (req, res) => {
    res.render('forgotPassword');
})

app.get('/history', (req, res) => {
    res.render('history');
})

app.get('/listView', (req, res) => {
    res.render('listView');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/pricing', (req, res) => {
    res.render('pricing');
})

app.get('/registerStudent', (req, res) => {
    res.render('registerStudent');
})

app.get('/registerTeacher', (req, res) => {
    res.render('registerTeacher');
})

app.get('/reviews', (req, res) => {
    res.render('reviews');
})

app.get('/search', (req, res) => {
    res.render('searchPage');
})

app.get('/unscheduledHours', (req, res) => {
    res.render('unscheduledHours');
})

app.get('/userPage', (req, res) => {
    res.render('userPage');
})

app.get('/userPageSettings', (req, res) => {
    res.render('userPageSettings');
})

app.get('/wallet', (req, res) => {
    res.render('wallet');
})