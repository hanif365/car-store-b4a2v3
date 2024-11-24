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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const car_model_1 = __importDefault(require("./car.model"));
const createCar = (carData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.create(carData);
    return result;
});
const getAllCars = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { brand: { $regex: searchTerm, $options: "i" } },
                { model: { $regex: searchTerm, $options: "i" } },
                { category: { $regex: searchTerm, $options: "i" } },
            ],
        };
    }
    const result = yield car_model_1.default.find(query);
    return result;
});
const getSingleCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findById(carId);
    if (!result) {
        throw new Error("Car not found!!");
    }
    return result;
});
// Update Car using put method
const updateCar = (carId, carData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findByIdAndUpdate(carId, carData, {
        new: true,
    });
    if (!result) {
        throw new Error("Car not found to update");
    }
    return result;
});
const deleteCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findByIdAndDelete(carId);
    console.log("result", result);
    if (!result) {
        throw new Error("Car not found which you want to delete");
    }
    return result;
});
exports.CarService = {
    createCar,
    getAllCars,
    getSingleCar,
    updateCar,
    deleteCar,
};
