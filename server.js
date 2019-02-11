// modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const UserModel = require('./app/models/model');
var cors = require('cors')


mongoose.connect('mongodb://127.0.0.1:27017/passport-jwt', {useNewUrlParser: true });
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./app/auth/auth');

// set our port
var port = process.env.PORT || 3000;

app.use(cors());
// set the static files location
app.use(express.static(__dirname + '/public'));
app.use( bodyParser.urlencoded({ extended : false }) );
app.use( bodyParser.json() );
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//require('./app/routes')(app); // configure our routes
const routes = require('./app/routes/routes');
const secureRoute = require('./app/routes/secure-routes');

app.use('/', routes);
//We plugin our jwt strategy as a middleware so only verified users can access this route
app.use('/user', passport.authenticate('jwt', { session : false }), secureRoute );

//Handle errors
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
});


// startup our app at http://localhost:3000
app.listen(port, () =>
console.log(`Your server is running on port ${port}`)
   );


// expose app
exports = module.exports = app;