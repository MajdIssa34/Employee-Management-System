import express from "express";
import mongoose from "mongoose";
import Employee from "../models/employee.model.js";
import { getEmployee, postEmployee, deleteEmployee, updateEmployee } from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/", getEmployee);

router.post("/", postEmployee);

router.delete("/:id", deleteEmployee);

router.put("/:id", updateEmployee);

export default router;