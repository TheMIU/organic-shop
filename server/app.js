var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var contactsRouter = require('./routes/contact');

var app = express(); // create express app

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middlewares 
app.use(logger('dev'));
// convert req body to JSON format
app.use(express.json());
// convert form-data to JSON format
app.use(express.urlencoded({ extended: false }));
// req.cookies
app.use(cookieParser());
// static path define
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for all routs
app.use(cors());
// handle preflight requests (optional)
// app.options('*', cors());

// path of the Route
app.use('/', indexRouter); // base url
app.use('/products', productsRouter);
app.use('/contact', contactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
