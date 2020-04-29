var express = require('express');

var hostname = 'localhost';
var port = 3000;


var app = express();
var router = express.Router();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

router.route('/air_console')

.get(function(req,res) {
    res.json({message : "List users id",
    id : req.query.id,
    methode : req.methode});
})

.post(function(req,res) {
    res.json({message : "Add user",
    id : req.body.id,
    methode : req.methode});
})

.delete(function(req,res) {
    res.json({message : "Delete user", 
    id : req.body.id,
    methode : req.methode});
});

app.use(router);


app.listen(port, hostname, function() {
    console.log("API launch, lien http://"+hostname +":"+port+"\n");
});