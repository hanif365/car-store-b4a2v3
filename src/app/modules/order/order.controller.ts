import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.createOrder(req.body);
    res.status(201).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(404).json({
      message:
        error instanceof Error ? error.message : "Failed to create order",
      success: false,
      error,
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderService.calculateRevenue();
    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error: unknown) {
    res.status(404).json({
      message:
        error instanceof Error ? error.message : "Failed to calculate revenue",
      success: false,
      error,
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};

export const OrderController = {
  createOrder,
  getRevenue,
};
