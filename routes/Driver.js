import express from "express";
import { createDriver, fetchDrivers, loginDriver, registerDriver } from "../controllers/Driver.js";


const DriverRoutes = express.Router();

DriverRoutes.post("/register", registerDriver)

DriverRoutes.post("/login", loginDriver)

DriverRoutes.get("/fetchAll", fetchDrivers)

DriverRoutes.post("/create", createDriver)

DriverRoutes.get("/fetchTickets/:email", )


export default DriverRoutes; 