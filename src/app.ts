import express, { Application, Request, Response } from "express";
import cors from "cors";
import carRoutes from "./app/modules/car/car.route";
import orderRoutes from "./app/modules/order/order.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

// API welcome route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Car Store API",
    success: true,
  });
});

// API health check route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is running smoothly",
    success: true,
  });
});

app.use(carRoutes);
app.use(orderRoutes);

export default app;
