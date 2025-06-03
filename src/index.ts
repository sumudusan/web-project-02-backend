// src/index.ts
import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors"

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());


// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});