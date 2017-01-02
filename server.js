var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('customerData', ['customerData', 'userData','productDetails']);
var bodyParser = require('body-parser');
var path = require('path');
app.use(express.static('public'));
app.use(bodyParser.json());
var mongoose = require('mongoose');
var schema = require('./public/models/userData.js');
// creating a model
mongoose.connect('mongodb://localhost:27017/customerData');
var User = mongoose.model('User', schema, 'userData');

//get the requested Login data from mongodb
app.post('/user', function(req, res, next) 
{
    var user = req.body;
    db.customerData.findOne(
    {
        email: user.id,
        password: user.password
    }, function(err, docs) 
    {
        if (err) 
        {
            console.log("error");
            return next(err);
        }
        console.log(docs);
        res.json(docs);
    });
});

//post the new customer data into database
app.post('/addCust', function(req, res) 
{
    var custData = req.body;
    var user = new User({
    firstname: custData.fname,
    lastname: custData.lname,
    gender: custData.gender,
    email: custData.email,
    address: custData.address,
    state: custData.state,
    city: custData.city,
    zip: custData.zip
    });
    user.save(function(error) 
    {
        if (error) 
        {
            console.log(error);
            process.exit(1);
        }

    });    
    res.json(user);
});

//get the requested cardview data from mongodb and send it to controller
app.get('/cardViewData', function(req, res, next) 
{
    db.userData.find(
        function(err, doc) {
            if (err) {
                console.log("err");
                return next();
            }
            if (doc) 
            {
              res.json(doc);
            }
        });

});

//delete the data from database
app.delete('/deleteData/:id', function(req, res) {
    var id = req.params.id;
    db.userData.remove(
    {
       _id: mongojs.ObjectId(id)
    }, function(err, docs) 
    {
        res.json(docs);
    });

});

//get the requested  data from database
app.get('/request/:id', function(req, res) 
{
    var id = req.params.id;
    console.log(id);
    db.userData.findOne(
    {
        _id: mongojs.ObjectId(id)
    }, function(err, docs) 
    {
        res.json(docs);
    });
});


//get the requested orders data from  colelction from database

app.get('/getData/:fname', function(req, res) 
{
    var fname = req.params.fname;
    db.productDetails.find({ firstName: fname }, function (err, docs) 
    {
            res.json(docs);
    });

});


//post the edited data from controller to database
app.post('/editedData',function(req,res,next)
{
    var whitelist= ['address','city','lastname','firstname','gender','email','state','zip'];
    var edit= req.body;
    console.log(edit);
    //if(profileData)
    var updater={};
    for (var ix in whitelist) 
    {
        var field = whitelist[ix];
        if (edit.hasOwnProperty(field)) 
        {
          updater[field] = edit[field];
        }
    }
    db.userData.update({_id: mongojs.ObjectId(edit._id)}, {$set: updater}, function(err, updated) 
    {
        if( err || !updated ) console.log("User not updated");
        else console.log("User updated");
    });
    db.userData.findOne({_id:mongojs.ObjectId(edit._id)},function(err,docs)
    {
        console.log(docs);
    });
    res.status(200).send('Profile has been updated');
});

//get the complete orders data from database
app.get('/totalOrders',function(req,res,next)
{
	  db.productDetails.find(
        function(err, doc) 
        {
            if (err) 
            {
                console.log("err");
                return next();
            }
            if (doc) 
            {
                // console.log(doc);
                res.json(doc);

            }
        });
});
//running on port 8000
app.listen(3000);
console.log("sever riunning");