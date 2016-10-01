
/**
 * Module dependencies.
 */

var express = require('express');


var routes = require('./routes'); //why not require('./routes/index') or it knows to search for the special index route?
                                  //what if i change name of index.js file to newindex.js for example. will this hold or
                                  // would I have to do require('./routes/newindex') now.

var user = require('./routes/user');
var ticket = require('./routes/ticket');

var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//middleware
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));

// development only. can use the app.configure('dev', function(){...middleware...}); instead.
// the first argument matches to the process.env.NODE_ENV global variable which we can set inorder to use the
// different configurations.

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//routes .. will later use regular expression parsing on the url in app.get(url,..), then req.params or req.query.. etc.
// or for a post, use a req.body.. etc

app.get('/', routes.index);
app.get('/index2', routes.func3);

app.get('/users', user.userfunc);
app.get('/func1', user.func1);
app.get('/func2', user.func2);

app.get('/ticket', ticket.list);


//app.get('/ticket', user.list);  //why can't I do app.get('/ticket', routes.ticketfunc)?
                                //looks like I'll have to require it up top: ticket = require('./routes/ticket');


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
