import express, { Application, json } from "express";
import "express-async-errors";
import cors from 'cors';
import ErrorCatcher from "@/middlewares/errors.middleware";
import MainRouter from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(json());
app.use(MainRouter);
// app.use(ErrorCatcher);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`--------------- Server is up and running on port ${PORT}`);
});