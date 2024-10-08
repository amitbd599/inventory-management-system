// Basic Lib Import
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

// Security Middleware Lib Import
const cookieParser = require("cookie-parser");
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const dotENV = require("dotenv");
dotENV.config();

// Database Lib Import
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.Origin_HOST_Site,
  })
);
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));


// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 })
app.use(limiter)

// Mongo DB Database Connection
let URI = "mongodb+srv://<username>:<db_password>@cluster0.4kz14t4.mongodb.net/inventory?retryWrites=true&w=majority&appName=Cluster0";
let OPTION = { user: 'amitbd591', pass: process.env.DB_PASS, autoIndex: true, serverSelectionTimeoutMS: 50000 }
mongoose.connect(URI, OPTION, (error) => {
  console.log("Connection Success")
  console.log(error)
})
mongoose.set('bufferCommands', false);



// Routing Implement
app.use("/api/v1", router)

// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" })
})


module.exports = app;
















