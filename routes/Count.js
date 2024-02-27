import express from "express";
import { countTotals } from "../controllers/Count.js";

const CountRoutes = express.Router()

CountRoutes.get('/countAll', countTotals)

export default CountRoutes;