import express from "express";
import { fetchEmployees, loginEmployee, registerEmployee } from "../controllers/Employee.js";


const EmployeeRoutes = express.Router();

EmployeeRoutes.post("/register", registerEmployee)

EmployeeRoutes.post("/login", loginEmployee)

EmployeeRoutes.get("/fetchAll", fetchEmployees)

// EmployeeRoutes.get("/fetchOne/:_id", )

// EmployeeRoutes.get("/fetchTickets/:email", )


export default EmployeeRoutes; 