import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

type ResponseMessage = {
  message: string;
};

app.get("/", (req: Request, res: Response<ResponseMessage>) => {
  res.json({ message: "Hello, TypeScript + Express + ESM!!!!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT} 🚀`);
});
