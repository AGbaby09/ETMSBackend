import express from "express";
import { createEmployee, fetchEmployees, loginEmployee, registerEmployee } from "../controllers/Employee.js";


const EmployeeRoutes = express.Router();

EmployeeRoutes.post("/register", registerEmployee)

EmployeeRoutes.post("/login", loginEmployee)

EmployeeRoutes.get("/fetchAll", fetchEmployees)

EmployeeRoutes.post("/create", createEmployee)

// EmployeeRoutes.get("/fetchTickets/:email", )


export default EmployeeRoutes; 