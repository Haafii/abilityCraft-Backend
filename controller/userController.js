const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');



const registerUser = asyncHandler(async (req, res) => {
    const {fullName, username, password} = req.body
    if(!fullName || !username || !password){
        res.status(404);
        throw new Error('Please fill all the fields');
    }
    const userAvailable = await User.findOne({username}) 
    if (userAvailable) {
        res.status(400);
        throw new Error('User already registered');
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(`Hashed Password ${hashedPassword}`);
    const user = await User.create({
        fullName,
        username,
        password: hashedPassword
    })
    res.status(201).send(user);
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id: user.id, username: user.username,})
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
});




const loginUser = asyncHandler(async (req, res) => {
    
    res.status(201).send('login success');
});


const currentUser = asyncHandler(async (req, res) => {
    res.status(201).send('current user');
});


module.exports = { registerUser, loginUser, currentUser}