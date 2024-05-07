const express  = require('express');
const dotenv = require("dotenv").config();
const gameRoutes = require('./router/gameRoutes');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./router/userRoutes');
const cors = require('cors');


connectDb();
const app = express();
const port = process.env.PORT || 8501;


app.use(cors());
app.use(express.json());
app.use('/games',gameRoutes)
app.use('/user', userRoutes);
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})