import Driver from "../models/Driver.js"
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const createToken = (_id) => {
    return (jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'}))
}

// register employee
export const registerDriver = async (req, res) => {
    const { fullname, branch, email, password, role } = req.body;

    try {
        // Check if email is valid
        if (!validator.isEmail(email)) {
            return res.status(400).json("Email is invalid");
        }

        // Check if the email is already in use
        const emailInUse = await Driver.findOne({ email: email });
        if (emailInUse) {
            return res.status(400).json("Email already in use");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await Employee.create({
            fullname: fullname,
            email: email,
            password: hashedPassword,
            branch: branch,
            role: role,
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};

// login employee
export const loginDriver = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        try {
            const user = await Driver.findOne({ email: email });
            const role = user.role;
            const id = user._id;
    
            if (user) {
                // Compare the hashed password with the provided password
                const passwordMatch = await bcrypt.compare(password, user.password);
    
                if (passwordMatch) {
                    const token = createToken(user._id)
                    res.status(200).json({email, token, role, id});
                } else {
                    res.status(400).json("incorrect password");
                }
            } else {
                res.status(400).json("User doesn't exists");
            }
        } catch (error) {
            console.error("Error during login:", error.message);
            res.status(500).json("Internal Server Error");
        }
    } else {
        res.status(400).json("All fields must be filled");
    }
};