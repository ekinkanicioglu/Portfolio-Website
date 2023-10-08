/* 
server.js
Ekin Kanicioglu
301306685
10-07-2023 */
const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs'); 

//set ejs as view engine
app.use(express.static(path.join(__dirname, 'app', 'views')));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

//render views
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
