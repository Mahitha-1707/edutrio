import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("EduTrio Backend Running..."));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
