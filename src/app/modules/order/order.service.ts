import { Types } from "mongoose";
import Order from "./order.model";
import Car from "../car/car.model";
import { TOrder } from "./order.interface";

const createOrder = async (orderData: TOrder) => {
  // Find car and check stock
  const car = await Car.findById(orderData.car);
  if (!car) {
    throw new Error("Car not found");
  }

  if (!car.inStock || car.quantity < orderData.quantity) {
    throw new Error("Insufficient stock");
  }

  // Create order
  const order = await Order.create(orderData);

  // Update car stock
  car.quantity -= orderData.quantity;
  if (car.quantity === 0) {
    car.inStock = false;
  }
  await car.save();

  console.log(order);

  return order;
};

const calculateRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);

  console.log(result);

  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const OrderService = {
  createOrder,
  calculateRevenue,
};
