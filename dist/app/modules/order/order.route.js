"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
const API_PREFIX = '/api/orders';
router.post(API_PREFIX, order_controller_1.OrderController.createOrder);
router.get(`${API_PREFIX}/revenue`, order_controller_1.OrderController.getRevenue);
exports.default = router;
