import express, { Application, Request, Response } from "express";

import bodyParser from "body-parser";
import cors from "cors";

import estateRouter from "./routes/estates.routes";
import "./API/sreality";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("SEE OUR NEW ESTATES!!!");
});

app.use(estateRouter);

export default app;
