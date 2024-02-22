import express from "express";
import { loginAdmin } from "../controllers/Admin.js";


const AdminRoutes = express.Router();

AdminRoutes.post("/register", )

AdminRoutes.post("/login", loginAdmin)

AdminRoutes.get("/fetchAll", )

AdminRoutes.get("/fetchOne/:_id", )

AdminRoutes.get("/fetchTickets/:email", )


export default AdminRoutes; 