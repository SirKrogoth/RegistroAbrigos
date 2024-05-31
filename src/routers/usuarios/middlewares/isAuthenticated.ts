import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import verifyAuth from "../../../secure/autorizacao";


export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authToken = req.headers.authorization;

    if (!authToken) {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }

    const [, token] = authToken.split(" ");

    const retorno = verifyAuth.verify(token);

    req.user_codigo = retorno?.decoded.codigo ?? '';

    return next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }
}