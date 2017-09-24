var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api.js');
var serveIndex = require('serve-index');

//var compression = require('compression');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Json Replacer and Spaces
app.set('json replacer', function(key, value) {
  if (key === 'createdAt' || key === 'updatedAt')
    return undefined;
  else
    return value;
});
app.set('json spaces', 4);

//disable x-powered by header
app.disable('x-powered-by')

//compression Middelware must be place before other Middelwares and routes
//app.use(compression());

// app.use(logger(':url :method :date'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json({
  strict: true
}));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use('/public', serveIndex(
  path.join('public'),
  {icons: true}
))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
