const mongoose = require('mongoose');

const user = mongoose.Schema({
    code : String
})

module.exports = mongoose.model('user', user);