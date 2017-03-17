var express = require('express');
var app = express();
var path = require('path');
var bp = require('body-parser');
var session = require('express-session');


app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(bp.json());
app.use(express.static(path.join(__dirname + '/client')));

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
