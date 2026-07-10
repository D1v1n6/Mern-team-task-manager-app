//vZZkGTIlgr5QGuQ7

import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./utils/connectionDB.js";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewares.js";
import routes from "./routes/index.js";


dotenv.config();

dbConnection();

const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001",process.env.CLIENT_URL,],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded());

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
