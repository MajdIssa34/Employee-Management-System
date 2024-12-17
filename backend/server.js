import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';


import employeeRoutes from "./routes/employee.routes.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows use to accept json data as req.body
app.use(cors());

app.use("/api/employees", employeeRoutes)

app.listen(5000, () => {
    connectDB();
    console.log("Server Started on http://127.0.0.1:5000");
});
