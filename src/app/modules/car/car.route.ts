import { Router } from "express";
import { CarController } from "./car.controller";

const router = Router();

const API_PREFIX = "/api/cars";

router.post(API_PREFIX, CarController.createCar);
router.get(API_PREFIX, CarController.getAllCars);
router.get(`${API_PREFIX}/:carId`, CarController.getASpecificCar);
router.put(`${API_PREFIX}/:carId`, CarController.updateCar);
router.delete(`${API_PREFIX}/:carId`, CarController.deleteCar);

export default router;
