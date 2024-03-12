const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
    res.status(201).send('User registered');
});


const loginUser = asyncHandler(async (req, res) => {
    res.status(201).send('login success');
});

const currentUser = asyncHandler(async (req, res) => {
    res.status(201).send('current user');
});


module.exports = { registerUser, loginUser, currentUser}