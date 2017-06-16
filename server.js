var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var cors = require('cors')
var config = require('./config')
var userCtrl = require('./controllers/userCtrl.js')
var profileCtrl = require('./controllers/profileCtrl.js')

var app = express();

var corsOptions = {
  origin: 'http://localhost:3000'
}


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(session({
  secret: config.sessionSecret
}))

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProperties);

app.listen(3000, function() {
  console.log('Hey, Listen!')
})
