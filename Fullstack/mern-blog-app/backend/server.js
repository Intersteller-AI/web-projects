import express, { response } from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db";
// routes
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'
import commentRoutes from './routes/commentRoutes'
import cors from 'cors'

import { errorResponerHandler, invalidPathHandler } from "./middleware/errorHandler";

import path from 'path'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

dotenv.config()
connectDB()
const app = express()
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/uploads", express.static("uploads"));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());


app.get('/', (req, res)=>{
  res.send('server is listening...')
})

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(invalidPathHandler)
app.use(errorResponerHandler)

const PORT = 5000 || process.env.PORT

app.listen(PORT, ()=>{
  console.log(`server is running on port http://localhost:${PORT}`);
})
