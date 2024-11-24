"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const car_service_1 = require("./car.service");
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.CarService.createCar(req.body);
        res.status(201).json({
            message: "Car created successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            message: error instanceof Error ? error.message : "Failed to create car",
            success: false,
            error,
            stack: error instanceof Error ? error.stack : undefined,
        });
    }
});
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield car_service_1.CarService.getAllCars(searchTerm);
        res.status(200).json({
            message: "Cars retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            message: error instanceof Error ? error.message : "Failed to get cars",
            status: false,
            error,
            stack: error instanceof Error ? error.stack : undefined,
        });
    }
});
const getASpecificCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.CarService.getASpecificCar(req.params.carId);
        res.status(200).json({
            message: "Car retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            message: error instanceof Error ? error.message : "Failed to get car",
            status: false,
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
        });
    }
});
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.CarService.updateCar(req.params.carId, req.body);
        res.status(200).json({
            message: "Car updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            message: error instanceof Error ? error.message : "Failed to update car",
            status: false,
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
        });
    }
});
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.CarService.deleteCar(req.params.carId);
        res.status(200).json({
            message: "Car deleted successfully",
            status: true,
            data: {},
        });
    }
    catch (error) {
        res.status(404).json({
            message: error instanceof Error ? error.message : "Failed to delete car",
            status: false,
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
        });
    }
});
exports.CarController = {
    createCar,
    getAllCars,
    getASpecificCar,
    updateCar,
    deleteCar,
};
