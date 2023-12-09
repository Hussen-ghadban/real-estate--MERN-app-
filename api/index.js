import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import mongoose from "mongoose"



//configure env0
dotenv.config();
// console.log("ihi")
// console.log(process.env.MONGO_URL)


mongoose.connect("mongodb+srv://hessen:hessen123@cluster0.stbfrve.mongodb.net/realestate")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
//databse config
// connectDB();

//rest object
const app = express();

//middelwares

//PORT
const PORT = 8000;

//run listen
app.listen(PORT, () => {
  console.log(
    'Server Running on mode on port PORT 8000'.bgCyan
      .white
  );
});