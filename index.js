// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
//import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
const postRoutes =require('./routes/post')

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts',postRoutes)

//connect to mongodb
const CONNECTION_URL = "mongodb+srv://root:dracula@cluster0.ciejg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

mongoose.set("useFindAndModify", false);
