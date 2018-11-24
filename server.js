var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  User = require('./api/models/user-model'), //created model loading here
  cors = require('cors'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/bankApp'); 
  
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  
  var routes = require('./api/routes/user-routes'); //importing route
  routes(app); //register the route
  app.use(cors())
  
  app.listen(port);
  
  
  console.log('todo list RESTful API server started on: ' + port);
  

