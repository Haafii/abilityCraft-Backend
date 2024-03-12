const asyncHandler = require('express-async-handler');
const BasicEtiquette = require('../models/basicEtiquetteModel');


const updateBasicEtiquette = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {username, timeToComplete, noOfWrong, totalNoOfAttempt, score } = req.body;
    if(!username || !timeToComplete || !noOfWrong || !totalNoOfAttempt || !score){
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

module.exports = { updateBasicEtiquette }