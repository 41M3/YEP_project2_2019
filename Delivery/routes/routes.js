var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/tetris', function (req, res) {
    res.render('tetris');
});

router.get('/gamepad1', function (req, res) {
    res.render('gamepad1');
});

router.get('/gamepad2', function (req, res) {
    res.render('gamepad2');
});

router.get('/gamepad3', function (req, res) {
    res.render('gamepad3');
});

router.get('/gamepad4', function (req, res) {
    res.render('gamepad4');
});

module.exports = router;