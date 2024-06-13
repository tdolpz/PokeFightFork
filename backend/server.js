import cors from "cors";
import express from "express";
import "./database/dbConnect.js";
import {errorHandler} from "./middleware/ErrorHandler.js";
import mongodbRouter from "./routes/mongodbRouter.js";
import pokefightRouter from "./routes/pokefightRouter.js";

const app = express();
const PORT = 8000;

// Set headers for CORS policy due to localhost environment
app.use(cors());
app.use(express.json());

app.use("/pokemon", pokefightRouter);
app.use('/player', mongodbRouter);

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
