const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const url = "mongodb://localhost/apartmentdb"

const app = express();

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection;

con.on('open', () => {
  console.log('connected..');
})

app.use(express.json())

const adminRouter = require('./routes/admin')
app.use('/', adminRouter);

const userRouter = require('./routes/users');
app.use('/user', userRouter);

const auth = require("./middleware/auth");





module.exports = app.listen(6005, () => {
  console.log("server started");
})



