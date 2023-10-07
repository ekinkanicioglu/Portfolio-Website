const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'app', 'views')));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.send('Projects');
});

app.get('/services', (req, res) => {
  res.send('Services');
});

app.get('/contact', (req, res) => {
  res.send('Contact');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
