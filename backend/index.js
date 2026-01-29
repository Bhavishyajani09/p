const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const authRouter = require('./Routes/AuthRouter');
const PORT = process.env.PORT || 4000;
require("./Models/db");




app.use(bodyParser.json());
app.use(cors());
app.use('/auth',authRouter)

app.get("/ping", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
