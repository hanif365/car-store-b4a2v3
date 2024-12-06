import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import carRoutes from './app/modules/car/car.route';
import orderRoutes from './app/modules/order/order.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

// Welcome route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to Car Store API',
    version: '1.0.0',
    documentation: '/api-docs',
    success: true,
  });
});

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    success: true,
  });
});

app.use(carRoutes);
app.use(orderRoutes);

export default app;
