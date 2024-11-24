import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

const PORT = config.port || 5001;
const DATABASE_URI = config.mongodbUri;

const bootstrap = async () => {
  try {
    if (!DATABASE_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(DATABASE_URI);
    console.log("Database connection successful!!!");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

bootstrap().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
