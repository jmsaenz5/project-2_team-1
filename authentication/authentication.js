var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Mongo Database");
});
// add body-parser for parsing incoming request bodies in a middelware
// create a POST route for sending data to server 
// store the values of the filled out form & store the data in the db with the schema..

// DONE IN USER FUNCTIONALITY ON ADMIN RIGHTS

app.post("/admin/adduser", function(req, res) {

  if (req.body.email &&
    req.body.First_Name &&
    req.body.Staff_ID &&
    req.body.Security_Role &&
    req.body.AD_Login &&
    req.body.Location_Code &&
    req.body.Person_ID &&
    req.body.passwordConf) {
    var userData = {
      firstName: req.body.First_Name,
      staffID: req.body.Staff_ID,
      securityRole: req.body.Security_Role,
      adLogin: req.body.AD_Login,
      locationCode: req.body.Location_Code,
      personID: req.body.Person_ID,
      passwordConf: req.body.passwordConf,
    }
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/profile');
      }
    });
  }
});

//install the bcrypt package & add prehook to mongoose schema

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
/**
"use sessions for tracking logins add express session package, add session middleware"
**/
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));
/**
"store mongodb userID, setup login route same way you set up the register route
ahthenticate the input against the data in the database in the user schema"
**/
//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}
/*
"create middleware to make user IDs available in HTML,
create logout  route that destroys the session id & redireccts back to the home route.
*/
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

function requiresLogin(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}
router.get('/profile', mid.requiresLogin, function(req, res, next) {
  //...
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));