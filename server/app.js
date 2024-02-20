const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const devoteeRoutes = require("./routes/devoteeRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
require("dotenv").config();

// const crypto = require("crypto");
// const jwtSecret = crypto.randomBytes(32).toString("hex");
// console.log(jwtSecret);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/devotees", devoteeRoutes, authRoutes);

// Connect Database
connectDB();

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
