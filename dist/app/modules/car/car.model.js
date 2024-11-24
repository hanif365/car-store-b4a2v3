"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    brand: { type: String, required: [true, "Brand is required"] },
    model: {
        type: String,
        required: [true, "Model is required"],
    },
    year: { type: Number, required: [true, "Year is required"] },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    category: {
        type: String,
        enum: {
            values: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
            message: "{VALUE} is not a valid category. Category must be one of: Sedan, SUV, Truck, Coupe, Convertible",
        },
        required: [true, "Category is required"],
    },
    description: { type: String, required: [true, "Description is required"] },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity must be greater than 0"],
    },
    inStock: { type: Boolean, default: true },
}, {
    timestamps: true,
});
const Car = (0, mongoose_1.model)("Car", carSchema);
exports.default = Car;
