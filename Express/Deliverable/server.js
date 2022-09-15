const express = require('express');
const app = express();
const ejs = require('ejs')
app.set('view engine', ejs)



app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.get('/about', (req, res) => {
    res.render('about.ejs')
});

app.get('/shop', (req, res) => {
    res.render('shop.ejs')
});

app.get('/deli', (req, res) => {
    res.render('deli.ejs')
});

app.get('/grocery', (req, res) => {
    res.render('grocery.ejs')
});

app.get('/frozen', (req, res) => {
    res.render('frozen.ejs')
});

app.get('/produce', (req, res) => {
    res.render('produce.ejs')
});

app.get('/health', (req, res) => {
    res.render('health.ejs')
});

app.get('/dairy', (req, res) => {
    res.render('dairy.ejs')
});

app.get('/delivery', (req, res) => {
    res.render('delivery.ejs')
});







app.listen(3000,() => {
        console.log('listening');
    });