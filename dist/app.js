"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const car_route_1 = __importDefault(require("./app/modules/car/car.route"));
const order_route_1 = __importDefault(require("./app/modules/order/order.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Car Store API',
        version: '1.0.0',
        documentation: '/api-docs',
        success: true,
    });
});
// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        success: true,
    });
});
app.use(car_route_1.default);
app.use(order_route_1.default);
exports.default = app;
