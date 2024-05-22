import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import autorizacao from '../../secure/autorizacao';

function validarLoginUsuario(req: Request, res: Response, next: any){
    try {
        const token = req.headers['x-access-token'] as string;
        
        if(!token) return res.status(StatusCodes.BAD_REQUEST).end();

        const payload = autorizacao.verify(token);

        if(!payload) return res.status(StatusCodes.UNAUTHORIZED).end();

        res.locals.payload = payload;

        next();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export {
    validarLoginUsuario
}