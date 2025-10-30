import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";
import 'dotenv/config';

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "https://expense-tracker-b-3.netlify.app/"]
}));

app.use(express.json());

app.use("/api", routes);

// connect database
connectDB();

export default app;