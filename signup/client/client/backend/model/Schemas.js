const mongoose = require('mongoose');
const userDetails = new mongoose.Schema({
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

module.exports = mongoose.model('users', userDetails);
