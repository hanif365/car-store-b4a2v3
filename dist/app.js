"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// API welcome route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Car Store API",
    });
});
// API health check route
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running smoothly",
    });
});
exports.default = app;
