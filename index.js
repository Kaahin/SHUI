import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connect to DB
// Username: SHUI_ADMIN
// Password: Password123

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, UseNewUrlParser: true },
  () => {
    console.log("Connected to database");
  }
);

const db = mongoose.connection;
db.on("error", console.log);

//TODO:: import ROUTE AUTH.js
// Middlewares
const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
