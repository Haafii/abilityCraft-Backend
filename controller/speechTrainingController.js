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



const getSpeechTraining = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const data = await SpeechTraining.find({ username: username });
    if (!data) {
        res.status(404);
        throw new Error('No details found for the username: ' + username);
    }
    res.status(200).send(data);
});


module.exports = { updateSpeechTraining, getSpeechTraining }