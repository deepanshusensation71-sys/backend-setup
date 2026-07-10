import express from "express"
import dotenv from "dotenv"
import authRouter from "./api/router/auth.router.js"
const app = express()

//  config:
dotenv.config()

//  middlewares
app.use(express.json())

//  routes
app.use("/api/auth",authRouter)


//  http://localhost:5000/api/auth/signup



export default app
