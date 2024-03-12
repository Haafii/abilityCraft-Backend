const asyncHandler = require('express-async-handler');
const SpeechTraining = require('../models/speechTrainingModel');

const updateSpeechTraining = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {username, attemptForPicture, attemptForSpeech, score } = req.body;
    if(!username || !attemptForPicture || !attemptForSpeech || !score ){
        res.status(400);
        throw new Error('All fields are required');
    }
    const speechTraining = await SpeechTraining.create({
        username,
        attemptForPicture,
        attemptForSpeech,
        score
    })
    res.status(201).send(speechTraining);
});

module.exports = { updateSpeechTraining }