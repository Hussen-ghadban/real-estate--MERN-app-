import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import mongoose from "mongoose"
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

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
app.use(express.json())
//middelwares
app.get('/test',(req,res)=>{
  res.json({
    message:'hello'
  })
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message ||"internal server error"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
//PORT
const PORT = 8000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on mode on port PORT ${PORT}`.bgCyan
      .white
  );
});

