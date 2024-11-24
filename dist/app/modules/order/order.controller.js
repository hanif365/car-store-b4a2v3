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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.createOrder(req.body);
        res.status(201).json({
            message: "Order created successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            message: error instanceof Error ? error.message : "Failed to create order",
            success: false,
            error,
            stack: error instanceof Error ? error.stack : undefined,
        });
    }
});
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.OrderService.calculateRevenue();
        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: {
                totalRevenue,
            },
        });
    }
    catch (error) {
        res.status(404).json({
            message: error instanceof Error ? error.message : "Failed to calculate revenue",
            success: false,
            error,
            stack: error instanceof Error ? error.stack : undefined,
        });
    }
});
exports.OrderController = {
    createOrder,
    getRevenue,
};
