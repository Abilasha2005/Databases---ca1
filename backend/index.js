require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const restaurant= require("./Schema");
const item = require("./Schema");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(" MongoDB Connected"))

  .catch(err => console.error(" DB Connection Failed:", err));


const port = process.env.port|| 5000;
app.listen(port, () => console.log(` Server running on port ${port}`));
