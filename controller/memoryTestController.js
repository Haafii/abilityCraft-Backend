const asyncHandler = require('express-async-handler');
const MemoryTest = require('../models/memoryTestModel');

const updateMemoryTest = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {username, difficulty, timeToComplete, noOfWrong, totalNoOfAttempt, score } = req.body;
    if(!username || !timeToComplete || !noOfWrong || !totalNoOfAttempt || !score || !difficulty){
        res.status(400);
        throw new Error('All fields are required');
    }
    const memoryTest = await MemoryTest.create({
        username,
        difficulty,
        timeToComplete,
        noOfWrong,
        totalNoOfAttempt,
        score
    })
    res.status(201).send(memoryTest);
});


module.exports = { updateMemoryTest }