// if you are must connect to multiple databases,
// you must connect to each database by using the createConnection method


var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var express =  require("express");
var app =  express();
var router = express.Router();


// This could be put in file user.js

/////////////////////////////////////
// mongoose.createConnection;
var db = mongoose.createConnection('mongodb://localhost:27017/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('db connection open');
});

var userSchema = new mongoose.Schema({
  "user" : String,
  "password" : String
});

var mongoOp = db.model('users', userSchema);
mongoose.createConnection;
/////////////////////////////////////

/////////////////////////////////////
// mongoose.connection
// mongoose.connect('mongodb://localhost:27017/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback() {
//     console.log('db connection open');
// });
//
// var userSchema  =  mongoose.Schema ({
//     "user" : String,
//     "password" : String
// });
//
// var mongoOp = mongoose.model('users', userSchema);
// mongoose.connection
/////////////////////////////////////

// Request must have Content-Type application/json
router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({"extended" : false}));

/* GET /todos listing. */
router.get('/users', function(req, res, next) {
  mongoOp.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* POST /todos */
router.post('/users', function(req, res, next) {
  // Request must have Content-Type application/json
  mongoOp.create(req.body, function (err, data) {
    if(!req.body || req.body.length === 0) {
      console.log('request body not found');
      return res.sendStatus(400);
    }
    console.log("post to /users: " + JSON.stringify(req.body));
    if (err) return next(data);
    res.json(data);
  });
});

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
// router.route("/users")
//     .get(function(req,res){
//         console.log("request to /users");
//         var response = {};
//         mongoOp.find({},function(err,data){
//         // Mongo command to fetch all data from collection.
//             if(err) {
//                 response = {"error" : true,"message" : "Error fetching data"};
//             } else {
//                 response =  data;
//             }
//             res.json(response);
//         });
//         //res.send('users');
//     })
//     .post(function(req,res){
//         var db = new mongoOp();
//         var response = {};
//         // fetch email and password from REST request.
//         // Add strict validation when you use this in Production.
//         db.userEmail = req.body.email;
//         db.userPassword = req.body.password;
//         console.log("post to /users" + JSON.stringify(req.body));
//
//         // Hash the password using SHA1 algorithm.
//         // db.userPassword =  require('crypto')
//         //                   .createHash('sha1')
//         //                   .update(req.body.password)
//         //                   .digest('base64');
//         db.save(function(err){
//         // save() will run insert() command of MongoDB.
//         // it will add new data in collection.
//             if(err) {
//                 response = {"error" : true,"message" : "Error adding data"};
//             } else {
//                 response = {"message" : "Data added"};
//             }
//             res.json(response);
//         });
//     });

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");
