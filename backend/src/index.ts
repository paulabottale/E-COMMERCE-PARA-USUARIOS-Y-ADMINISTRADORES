import express, { NextFunction, Request, Response } from "express"
import { connectDb } from "./config/connectDb"
import { authRouter } from "./routes/authRouter"
import { productRouter } from "./routes/productRouter"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();




process.loadEnvFile()

const PORT = process.env.PORT || 3000
const JWT_SECRET = process.env.JWT_SECRET



const app = express()
app.use(express.json())
app.use(cors())

// el index define que entidad quiere trabajar el user
app.use("/api/auth", authRouter)
app.use("/api/products", productRouter)

app.listen(PORT, () => {
  console.log(`✅ Servidor HTTP en escucha en el puerto ${PORT}`)
  connectDb()
})