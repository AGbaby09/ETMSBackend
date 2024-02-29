import Employee from "../models/Employee.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import validator from "validator";

export const editFullname = async (req, res) => {
    try {
        
        const {id, input} = req.body;

        const foundEmployee = await Employee.findByIdAndUpdate(
            id,
            {fullname: input}, 
            {new:true}
        );
        const foundAdmin = await Admin.findByIdAndUpdate(
            id,
            {fullname: input}, 
            {new:true}
        )

        if(foundAdmin || foundEmployee){
            res.status(200).json('successfully update fullname')
        }else{
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

export const editEmail = async (req, res) => {
    try {
        
        const {id, input} = req.body;

        if (!validator.isEmail(input)) {
            return res.status(400).json("Email is invalid");
        }

        const foundEmployee = await Employee.findByIdAndUpdate(
            id,
            {email: input}, 
            {new:true}
        );
        const foundAdmin = await Admin.findByIdAndUpdate(
            id,
            {email: input}, 
            {new:true}
        )

        if(foundAdmin || foundEmployee){
            res.status(200).json('successfully update email')
        }else{
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

export const editContact = async (req, res) => {
    try {
        
        const {id, input} = req.body;

        const foundEmployee = await Employee.findByIdAndUpdate(
            id,
            {contact: input}, 
            {new:true}
        );
        const foundAdmin = await Admin.findByIdAndUpdate(
            id,
            {contact: input}, 
            {new:true}
        )

        if(foundAdmin || foundEmployee){
            res.status(200).json('successfully update contact')
        }else{
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

export const editPassword = async (req, res) => {
    try {
        
        const {id, input} = req.body;

        const hashedPassword = await bcrypt.hash(input, 10);

        const foundEmployee = await Employee.findByIdAndUpdate(
            id,
            {password: hashedPassword}, 
            {new:true}
        );
        const foundAdmin = await Admin.findByIdAndUpdate(
            id,
            {password: hashedPassword}, 
            {new:true}
        )

        if(foundAdmin || foundEmployee){
            res.status(200).json('successfully update contact')
        }else{
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        res.status(500).json(error)
    }
}