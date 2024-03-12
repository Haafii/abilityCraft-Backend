const mongoose = require('mongoose');
const speechTrainingSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    attemptForPicture: {
        type: String,
        required: true,
    },
    attemptForSpeech: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('speechTraining', speechTrainingSchema);