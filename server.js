var express = require('express'); 
var app = express(); 

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
	res.render()
  })
app.get('/home', (req, res) => {
	res.send('home')
  })
  app.get('/about', (req, res) => {
    res.render()
})
app.get('/projects', (req, res) => {
	res.send('projects')
  })
app.get('/services', (req, res) => {
	res.send('services')
  })
app.get('/contact', (req, res) => {
	res.send('contact')
  })




  
  app.listen(3000); 
console.log('Server running at http://localhost:3000/'); 
module.exports = app; 
