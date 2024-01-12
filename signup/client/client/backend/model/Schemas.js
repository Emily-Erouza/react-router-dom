const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    number: {
        type: String,
        required: true
    },

   
});

module.exports = mongoose.model('user', userModel);
