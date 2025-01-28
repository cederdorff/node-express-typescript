import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Define a type for the response message
type ResponseMessage = {
  message: string;
};

// Root route
app.get("/", (req: Request, res: Response<string>) => {
  res.send("Hello, TypeScript with Node.js 🎉");
});

// API route with a typed response
app.get("/api", (req: Request, res: Response<ResponseMessage>) => {
  res.json({
    message: "Hello, TypeScript with Node.js!!"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
