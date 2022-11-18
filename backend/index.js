import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
   
  } catch (error) {
    console.error(error.message)
  }
}

//Check connection to MongoDB
mongoose.connection.on("disconnected", ()=>{
  console.log("Disconnected from mondoDB")
})

mongoose.connection.on("connected", ()=>{
  console.log("mondoDB connected")
})

//add route entry point

app.get('/api/v1/', (req,res) => {
  res.send("Hello world")
})

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute)
app.use("/api/v1/hotels", hotelsRoute)
app.use("/api/v1/rooms", roomsRoute)




app.listen(5000, () =>{
  connect();
  console.log("Server is running on port 5000");
})