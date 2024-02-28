import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  return res.send("Hi Everyone");
});

import router from "./routes/index.js";
app.use(router);

app.listen(PORT, () => console.log("Server is just running"));
