const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');

const bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://darruin:mPiazkoRG4k83iM8@cluster0-xbgit.gcp.mongodb.net/test?retryWrites=true&w=majority', {userNewUrlParser: true});
var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(bodyParser());

app.get('/', async(req, res) => {
    const users = await User.find()
    await res.json(users)
})

app.post('/', async (req, res) => {
    const code = req.body.code;

    if (!code) {
        res.send('Argument error')
        return
    }

    const newUser = new User({
        code : code
    })

    let saveUser = await newUser.save()
    res.send(saveUser);
    
    return
})

app.delete('/:code', async(req, res) => {
    const code = req.params.code
    const del = await User.deleteOne({code : code})
    res.json(del)
})



app.listen(port, hostname, () => {
    console.log("API launch, lien http://"+hostname +":"+port+"\n");
});