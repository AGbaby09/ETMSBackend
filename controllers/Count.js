import Vehicle from "../models/Vehicle.js";
import Driver from "../models/Driver.js";
import Employee from "../models/Employee.js";

export const countTotals = async (req, res) => {
    try {
        const totalVehicles = await Vehicle.countDocuments();
        const totalDrivers = await Driver.countDocuments();
        const totalEmployees = await Employee.countDocuments();

        return res.status(200).json({
            totalVehicles,
            totalDrivers,
            totalEmployees
        });
    } catch (error) {
        console.error('Error counting totals:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
