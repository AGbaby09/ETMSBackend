import express from "express";
import { loginDriver, registerDriver } from "../controllers/Driver.js";


const DriverRoutes = express.Router();

DriverRoutes.post("/register", registerEmployee)

DriverRoutes.post("/login", loginEmployee)

DriverRoutes.get("/fetchAll", )

DriverRoutes.get("/fetchOne/:_id", )

DriverRoutes.get("/fetchTickets/:email", )


export default DriverRoutes; 