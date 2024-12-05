import mongoose from 'mongoose';
import config from './index';

const connectDB = async (): Promise<void> => {
  try {
    if (!config.mongodbUri) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    await mongoose.connect(config.mongodbUri);
    console.log('Database connection successful!!!');
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
};

export default connectDB;
