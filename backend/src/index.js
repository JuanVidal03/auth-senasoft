import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { dbConnection } from "./DB/dbConnection.js"

config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
}));

const PORT = process.env.PORT || 8080;

import authRouter from "./routes/auth.routes.js";

app.use("/api", authRouter);

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
dbConnection();
