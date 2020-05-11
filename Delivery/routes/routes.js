var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/gamepad', function(req, res) {
    res.render('gamepad');
});

module.exports = router;