const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const app = express();

app.use(cors()); // Enable CORS

app.get("/test", async (req, res) => {
  return res.status(200).json("Hello from vercel")
});

app.listen(5000, () => {
  console.log(`App is listening to 5000 ....`)
})
