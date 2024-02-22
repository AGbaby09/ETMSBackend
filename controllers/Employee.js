import Employee from "../models/Employee.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' });
}

export const registerEmployee = async (req, res) => {
    const { fullname, branch, email, password, role, contact } = req.body;

    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json("Email is invalid");
        }

        const emailInUse = await Employee.exists({ email });
        if (emailInUse) {
            return res.status(400).json("Email already in use");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Employee.create({ fullname, email, password: hashedPassword, branch, role, contact });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json("Internal Server Error");
    }
};

export const loginEmployee = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("All fields must be filled");
    }

    try {
        const user = await Employee.findOne({ email });
        if (!user) {
            return res.status(400).json("User doesn't exist");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = createToken(user._id);
            const { _id, role } = user;
            res.status(200).json({ email, token, role, id: _id });
        } else {
            res.status(400).json("Incorrect password");
        }
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).json("Internal Server Error");
    }
};

export const fetchEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().sort({ createdAt: -1 });
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json("Internal Server Error");
    }
};


export const createEmployee = async (req, res)=>{
    const { fullname, branch, email, password, role, contact } = req.body;

    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json("Email is invalid");
        }

        const emailInUse = await Employee.exists({ email });
        if (emailInUse) {
            return res.status(400).json("Email already in use");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Employee.create({ fullname, email, password: hashedPassword, branch, role, contact });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json("Internal Server Error");
    }
}