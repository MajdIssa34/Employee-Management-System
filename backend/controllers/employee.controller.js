import Employee from "../models/employee.model.js";
import mongoose from "mongoose";

export const getEmployee = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json({ success: true, data: employees });
    } catch (error) {
        console.error("Error fetching employees:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const postEmployee =  async (req, res) => {
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
};

export const deleteEmployee = async (req, res) => {
    const {id} = req.params;
    try {
        await Employee.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product Deleted!"});
    } catch (error) {
        res.status(404).json({ success: false, message: "Product not found!"});
    }
};


export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid ID!" });
    }

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ success: false, message: "Employee not found!" });
        }
        res.status(200).json({ success: true, data: updatedEmployee });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};
