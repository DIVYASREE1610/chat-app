import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connetToMongoDB from "./db/connectTomongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

 app.use(express.json());
app.use("/api/auth", authRoutes)

// app.get("/", (req, res)=>{
//     //root router http://localhost:5000/
//     res.send("Hello World! hi ");
// });


app.listen(PORT, ()=>{
    connetToMongoDB();
    console.log(`Server Running on Port ${PORT}`)
});