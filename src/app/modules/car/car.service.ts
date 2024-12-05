import { TCar } from './car.interface';
import CarModel from './car.model';

const createCar = async (carData: TCar) => {
  const result = await CarModel.create(carData);
  return result;
};

const getAllCars = async (searchTerm?: string) => {
  let query = {};

  if (searchTerm) {
    searchTerm = searchTerm.replace(/^"|"$/g, '');
    console.log('searchTerm', searchTerm);

    query = {
      $or: [
        { brand: { $regex: searchTerm, $options: 'i' } },
        { model: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    };
  }

  const result = await CarModel.find(query);

  return result;
};

const getASpecificCar = async (carId: string) => {
  const result = await CarModel.findById(carId);

  if (!result) {
    throw new Error('Car not found!!');
  }

  return result;
};

// Update Car using put method
const updateCar = async (carId: string, carData: Partial<TCar>) => {
  const result = await CarModel.findByIdAndUpdate(carId, carData, {
    new: true,
  });

  if (!result) {
    throw new Error('Car not found to update');
  }

  return result;
};

const deleteCar = async (carId: string) => {
  const result = await CarModel.findByIdAndDelete(carId);

  console.log('result', result);

  if (!result) {
    throw new Error('Car not found which you want to delete');
  }

  return result;
};

export const CarService = {
  createCar,
  getAllCars,
  getASpecificCar,
  updateCar,
  deleteCar,
};
