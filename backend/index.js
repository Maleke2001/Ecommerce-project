import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from "./routes/upload.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import fs from "fs";

dotenv.config();

const app = express();
const port = 5000;

// Ensure that the upload directory exists
const uploadDir = "./upload/images";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(express.json()); 
app.use(cors());




// Serve uploaded images statically
app.use("/images", express.static("upload/images"));
app.use("/api/upload", uploadRoutes);

// Register routes
app.use("/api/product", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);    // duplicate
app.use("/api/category", categoryRoutes)


// Start the server
app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});


// Add after your routes and before app.listen
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});
