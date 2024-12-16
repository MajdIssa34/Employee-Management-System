import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Employee from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows use to accept json data as req.body

app.post("/api/employees", async (req, res) => {
    const employee = req.body; // sent by user

    if(!employee.name || !employee.jobTitle || !employee.department || !employee.salary){
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newEmployee = new Employee(employee);

    // try to save the new employee to the database
    try {
        await newEmployee.save();
        res.status(201).json({success:true, data: newEmployee});
    } catch (error) {
        console.error("Error in adding employee, " + error, + " :(");
        res.status(500).json({success: false, message: "Server error"});
    }
});

app.listen(5500, () => {
    connectDB();
    console.log("Server Started");
})