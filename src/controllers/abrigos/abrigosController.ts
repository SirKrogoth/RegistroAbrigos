import { Request, Response } from 'express';
import iAbrigos from '../../models/abrigos/interfaces/iAbrigos';
import abrigosRepository from '../../repository/abrigos/abrigosRepository';
import { v4 as uuidv4 } from 'uuid';
import { StatusCodes } from 'http-status-codes';

async function health(req: Request, res: Response, next: any){
    try {
        res.status(StatusCodes.OK).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function create(req: Request, res: Response, next: any){
    try {
        const abrigo = req.body as iAbrigos;
        abrigo.codigo = uuidv4();
        const result = abrigosRepository.create(abrigo);

        if(result === null) return res.status(StatusCodes.BAD_REQUEST).end();
        
        res.status(StatusCodes.CREATED).end();

    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    health,
    create
}