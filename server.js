var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var cors = require('cors')
var config = require('./config.js')
var userCtrl = require('./controllers/userCtrl.js')
var profileCtrl = require('./controllers/userCtrl.js')

var app = express();

var corsOptions = {
  origin: 'http://localhost:8999'
}


app.use( bodyParser.json() )
app.use( cors(corsOptions) )
app.use( session({ secret: config.sessionSecret}))






app.listen(3000, function() {
  console.log('Hey, Listen!')
})
