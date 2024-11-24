![Car store api](https://github.com/user-attachments/assets/f1688007-9a93-4ba6-8d24-d3bfa8ac9fb4)

# Car Store API

A TypeScript-based REST API for car store management with MongoDB integration.

## Live Links
- API: [Your Deployment URL]

## Key Features
- [x] Car inventory management
- [x] Order processing with stock validation
- [x] Revenue calculation using MongoDB aggregation
- [x] Search functionality using the brand, model, and category of cars
- [x] Email validation & error handling

## Tech Stack
- TypeScript
- Express.js
- MongoDB
- Mongoose

## Installation Guide

1. Clone & Install:
   
```bash
git clone https://github.com/hanif365/car-store-b4a2v3.git
cd car-store-b4a2v3
npm install
```

2. Environment Setup(Create .env file with):

```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
```

3. Run Project:

 - [x] For Development
 ```bash
 npm run start:dev
 ```
 - [x] For Production
 ```bash
 npm start
 ```

## API Endpoints

### Cars

```plaintext
POST /api/cars # Create car
GET /api/cars # Get all cars (with search)
GET /api/cars/:carId # Get specific car
PUT /api/cars/:carId # Update car
DELETE /api/cars/:carId # Delete car
```

### Orders

```plaintext
POST /api/orders # Create order
GET /api/orders/revenue # Get total revenue
```


   


