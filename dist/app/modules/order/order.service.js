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
exports.OrderService = void 0;
const order_model_1 = __importDefault(require("./order.model"));
const car_model_1 = __importDefault(require("../car/car.model"));
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    // Find car and check stock
    const car = yield car_model_1.default.findById(orderData.car);
    if (!car) {
        throw new Error("Car not found");
    }
    if (!car.inStock || car.quantity < orderData.quantity) {
        throw new Error("Insufficient stock");
    }
    // Create order
    const order = yield order_model_1.default.create(orderData);
    // Update car stock
    car.quantity -= orderData.quantity;
    if (car.quantity === 0) {
        car.inStock = false;
    }
    yield car.save();
    console.log(order);
    return order;
});
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" },
            },
        },
    ]);
    console.log(result);
    return result.length > 0 ? result[0].totalRevenue : 0;
});
exports.OrderService = {
    createOrder,
    calculateRevenue,
};
