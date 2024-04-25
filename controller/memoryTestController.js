const asyncHandler = require('express-async-handler');
const MemoryTest = require('../models/memoryTestModel');

const updateMemoryTest = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {username, difficulty, timeToComplete, noOfWrong, totalNoOfAttempt, score } = req.body;
    if(!username || !timeToComplete || !difficulty){
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



const getMemoryTest = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const data = await MemoryTest.find({ username: username });
    if (!data) {
        res.status(404);
        throw new Error('No details found for the username: ' + username);
    }
    res.status(200).send(data);
});


module.exports = { updateMemoryTest, getMemoryTest }