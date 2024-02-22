import Admin from "../models/Admin.js"
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (_id) => {
    return (jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'}))
}


export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        try {
            const user = await Admin.findOne({ email: email });
            const role = user.role;
            const id = user._id;
    
            if (user) {
                // Compare the hashed password with the provided password
                // const passwordMatch = await bcrypt.compare(password, user.password);
                const passwordMatch = () =>{
                    return password === user.password
                };
    
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