//Requirements for the server to run
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//allows requirement variables to be stored in .env file
require('dotenv').config();

//Create express server
const app = express();
const port = process.env.PORT || 5000;

//middleware, allows us to parse json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Require the use of the routing files to allow users to navigate from the root url to other pages
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//Use the routing files to allow redirecting
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});