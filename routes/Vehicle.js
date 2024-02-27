import express from 'express';
import { boardVehicle, closeVehicle, createVehicle, fetchOpenVehicles, fetchVehicles, updateVehicle } from '../controllers/Vehicle.js';

const VehicleRoutes = express.Router();

VehicleRoutes.post('/create', createVehicle);
VehicleRoutes.post('/board', boardVehicle);
VehicleRoutes.put('/open', updateVehicle);
VehicleRoutes.put('/close', closeVehicle);
VehicleRoutes.get('/fetchAll', fetchVehicles);
VehicleRoutes.get('/fetchOpen', fetchOpenVehicles);

export default VehicleRoutes;