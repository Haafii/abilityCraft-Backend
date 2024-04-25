const asyncHandler = require('express-async-handler');
const BasicEtiquette = require('../models/basicEtiquetteModel');


const updateBasicEtiquette = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {username, timeToComplete, noOfWrong, totalNoOfAttempt, score } = req.body;
    if(!username || !timeToComplete || !totalNoOfAttempt || !score){
        res.status(400);
        throw new Error('All fields are required');
    }
    const basicEtiquette = await BasicEtiquette.create({
        username,
        timeToComplete,
        noOfWrong,
        totalNoOfAttempt,
        score
    })
    res.status(201).send(basicEtiquette);
})

const getBasicEtiquette = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const data = await BasicEtiquette.find({ username: username });
    if (!data) {
        res.status(404);
        throw new Error('No details found for the username: ' + username);
    }
    res.status(200).send(data);
});


module.exports = { updateBasicEtiquette, getBasicEtiquette }