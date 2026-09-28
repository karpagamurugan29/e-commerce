import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/Routes.js";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api", routes);

const startServer = async () => {
    try {
        await mongoose.connect(process.env.DBSECRET);

        console.log("MongoDB connected successfully");

        app.listen(port, () => {
            console.log(`App running on port ${port}`);
        });
    } catch (err) {
        console.error("DB not connected:", err);
    }
};

startServer();