import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(5000, () => {
    console.log("server is running...");
});

connectDB();