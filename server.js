import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import EmployeeRoutes from "./routes/Employee.js";
import Admin from "./routes/Admin.js";
import DriverRoutes from "./routes/Driver.js";
// import Driver from "./routes/Driver.js";
// import Vehicle from "./routes/Vehicle.js";rs

// import Driver from "./routes/Driver.js";


// configuring dotenv
dotenv.config();
// connect to db
dbConnect();

const app = express();

const corsOptions = {
    origin: ["https://kromtroski.vercel.app", "http://localhost:5173"],
    methods: ["POST", "GET", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200,
    preflightContinue: false,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Authorization"]
};

app.use(express.json({limit: '25mb'}));

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));


// routes
app.use("/api/v1/employee", EmployeeRoutes)
app.use("/api/v1/admin", Admin)
app.use("/api/v1/driver", DriverRoutes)











// listening to port
const port = process.env.PORT;
app.listen(port, ()=>{console.log("server is running on port", port)});

