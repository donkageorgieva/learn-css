import mongoose from "mongoose";

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  const URI = process.env.MONGODB_URI;

  if (!URI) {
    throw new Error("Please add your MongoDB URI to .env");
  }

  try {
    await mongoose.connect(URI);
    isConnected = true;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
