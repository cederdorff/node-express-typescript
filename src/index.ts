import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js 🎉");
});

app.get("/api", (req: Request, res: Response) => {
  res.json({
    message: "Hello, TypeScript with Node.js!!"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
