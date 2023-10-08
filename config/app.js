/* 
app.js
Ekin Kanicioglu
301306685
10-07-2023 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../app/routes/index.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs');
//packages
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
//routers
app.use('/', indexRouter);
app.use('/about', indexRouter);
app.use('/projects', indexRouter);
app.use('/services', indexRouter);
app.use('/contact', indexRouter);
app.use(function(req, res, next) {
  next(createError(404));
});
app.get('/', function(req, res) {
  var content = 'content';
  res.render('home', { content : content });
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error Page'
  });

  
});