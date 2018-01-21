var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/project2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("project2");
  dbo.createCollection("User_DB", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});





// // create a schema according to the docs and store it in it's own folder 
// // the schema should describe the fields we have in our form and specify the data it can expect

// //DONE IN USER FUNCTIONALITY UNDER ADMIN RIGHTS

// var mongoose = require('mongoose');
// var UserSchema = new mongoose.Schema({
//   Last_Name: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true
//   },
//   First_Name: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true
//   },
//   Staff_ID: {
//     type: String,
//     required: true,
//   },
//   Security_Role: {
//     type: String,
//     required: true,
//   },
//   AD_Login: {
//     type: String,
//     required: true,
//   },
//   Location_Code: {
//     type: String,
//     required: true,
//   },
//   Person_ID: {
//     type: String,
//     required: true,
//   },
//   passwordConf: {
//     type: String,
//     required: true,
//   }
// });

// var User = mongoose.model('User', UserSchema);
// module.exports = User;