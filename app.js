const express  = require('express');
const dotenv = require("dotenv").config();
const gameRoutes = require('./router/gameRoutes');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');


connectDb();
const app = express();
const port = process.env.PORT || 8501;



app.use(express.json());
app.use('/games',gameRoutes)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})