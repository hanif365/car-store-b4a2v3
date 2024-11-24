import { Request, Response } from "express";
import { CarService } from "./car.service";

const createCar = async (req: Request, res: Response) => {
  try {
    const result = await CarService.createCar(req.body);
    res.status(201).json({
      message: "Car created successfully",
      success: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Failed to create car",
      success: false,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await CarService.getAllCars(searchTerm as string);

    res.status(200).json({
      message: "Cars retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Failed to get cars",
      status: false,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const result = await CarService.getSingleCar(req.params.carId);
    res.status(200).json({
      message: "Car retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Failed to get car",
      status: false,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const result = await CarService.updateCar(req.params.carId, req.body);
    res.status(200).json({
      message: "Car updated successfully",
      status: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Failed to update car",
      status: false,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const result = await CarService.deleteCar(req.params.carId);
    res.status(200).json({
      message: "Car deleted successfully",
      status: true,
      data: {},
    });
  } catch (error: unknown) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Failed to delete car",
      status: false,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};

export const CarController = {
  createCar,
  getAllCars,
  getSingleCar,
  updateCar,
  deleteCar,
};
