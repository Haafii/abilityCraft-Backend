const mongoose = require('mongoose');
const basicEtiquetteSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    timeToComplete : {
        type: String,
        required: true,
    },
    noOfWrong: {
        type: String,
        required: true,
    },
    totalNoOfAttempt: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('BasicEtiquette', basicEtiquetteSchema);