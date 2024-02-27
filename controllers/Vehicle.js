import Vehicle from "../models/Vehicle.js";

export const createVehicle = async (req, res)=>{
    const { brand, plate, seats } = req.body;
    const status = 'closed';
    try {

        const plateExists = await Vehicle.exists({ plate });
        if (plateExists) {
            return res.status(400).json("Number plate already registered");
        }else{
            const newVehicle = await Vehicle.create({ brand, plate, seats, status });
            res.status(201).json(newVehicle);
        }

    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json("Internal Server Error");
    }
}

export const fetchVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find().sort({ createdAt: -1 });
        res.status(200).json(vehicles);
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        res.status(500).json("Internal Server Error:", error);
    }
};

export const fetchOpenVehicles = async (req, res) => {
    try {
        const openVehicles = await Vehicle.find({ status: 'open' }).sort({ createdAt: -1 });
        res.status(200).json(openVehicles);
    } catch (error) {
        console.error("Error fetching open vehicles:", error);
        res.status(500).json("Internal Server Error:", error);
    }
};

export const updateVehicle = async (req, res) => {
    try {
        const { driver, destination, time, id } = req.body;

        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            id, 
            { driver, destination, time, status: 'open' },
            { new: true }
        );

        if (updatedVehicle) {
            res.status(200).json(updatedVehicle);
        } else {
            res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (error) {
        console.error('Error updating vehicle:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const closeVehicle = async (req, res) => {
    try {
        const { id } = req.body;

        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            id,
            // note to change time to null !INCOMPLETE
            { driver: '', destination: '', time: null, status: 'closed' },
            { new: true }
        );

        if (updatedVehicle) {
            res.status(200).json(updatedVehicle);
        } else {
            res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (error) {
        console.error('Error closing vehicle:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const boardVehicle = async (req, res) => {
    try {
        const { id, passenger } = req.body;

        const vehicle = await Vehicle.findById(id);

        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        if (vehicle.passengers.includes(passenger)) {
            return res.status(400).json({ message: 'Passenger already boarded' });
        }

        if (vehicle.passengers.length >= vehicle.seats) {
            return res.status(400).json({ message: 'Vehicle is full' });
        }

        vehicle.passengers.push(passenger);
        
        const updatedVehicle = await vehicle.save();

        return res.status(200).json(updatedVehicle);
        
    } catch (error) {
        console.error('Error boarding vehicle:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};