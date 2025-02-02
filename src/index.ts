import express from "express";
import Person from "./helper.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Node.js!");
});

app.get("/race", (req, res) => {
  const race: Person = {
    name: "Rasmus Cederdorff",
    age: 34
  };

  res.json(race);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
