import express, { Request, Response } from "express";
import ResponseMessage from "./types/responseMessage.js";
import ErrorResponse from "./types/errorResponse.js";
import Product, { products } from "./types/product.js";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response<ResponseMessage>) => {
  res.json({ message: "Hello, TypeScript + Express + ESM!!!!" });
});

app.get("/error", (req: Request, res: Response<ErrorResponse>) => {
  res.status(500).json({ error: "Internal Server Error", details: "Something went wrong" });
});

app.get("/products", (req: Request, res: Response<Product[]>) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT} 🚀`);
});
