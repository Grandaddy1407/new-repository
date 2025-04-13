
const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const { PORT,  } = process.env;


app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
    });

 app.get('/about', (req, res) => {
    res.render('about', { title: 'About'})
})
   
    app.get('/services', (req, res) => {
        res.render('services', { title: 'services'})
    })

    app.get('/404', (req, res) => {
        res.render('404', { title: '404 Not Found' });
    });

    app.listen(process.env.PORT || 3000, () => {
        console.log('server is running on port $PORT || 3000');
    })