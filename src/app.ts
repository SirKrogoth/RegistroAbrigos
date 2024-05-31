import express from "express";
import helmet from "helmet";
import cors from "cors";
import abrigosRouter from './routers/abrigos/abrigosRouter';
import usuariosRouter from './routers/usuarios/usuariosRouter';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(usuariosRouter);
app.use(abrigosRouter);

export default app;