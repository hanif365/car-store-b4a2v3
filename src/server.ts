import app from "./app";
import connectDB from "./app/config/db";
import config from "./app/config";

const PORT = config.port || 5001;

const bootstrap = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

bootstrap();
