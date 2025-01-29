const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const studentRouter = require('./Routes/studentRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/api/students", studentRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err){
        console.log("Error on running server" + err);
    }
    else{
        console.log("Server is running on port: " + PORT);
    }
});