import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  mongodbUri: process.env.MONGODB_URI,
  bcryptSaltRounds: process.env.BCRYPT_SALT_ROUNDS,
};
