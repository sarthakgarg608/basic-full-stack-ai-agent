import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.js";

dotenv.config()

const PORT = process.env.PORT||3000
const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/auth", userRoutes);

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("MongoDB connected successfully")
  app.listen(PORT,() =>{
    console.log(`Server is running on  port :${PORT}`)
  })

})
.catch((err) => console.error("MongoDB error ",err))