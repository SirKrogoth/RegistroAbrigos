import express, { Router } from "express";
import helmet from "helmet";
import cors from "cors";
import abrigosRouter from './routers/abrigos/abrigosRouter';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(abrigosRouter);

export default app;