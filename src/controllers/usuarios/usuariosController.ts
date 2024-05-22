import { Request, Response } from 'express';

import iUsuarios from '../../models/usuarios/interfaces/iUsuarios';
import iUsuarioLogin from '../../models/usuarios/interfaces/iUsuarioLogin';

import usuariosRepository from '../../repository/usuarios/usuariosRepository';
import { StatusCodes } from 'http-status-codes';
import { v4 as uuid4 } from 'uuid';
import autenticacao from '../../secure/autenticacao';

function health(req: Request, res: Response, next: any){
    try {
        res.status(StatusCodes.OK).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function create(req: Request, res: Response, next: any){
    try {
        const usuario = req.body as iUsuarios;
        usuario.codigo = uuid4();
        usuario.senha = autenticacao.hashPassword(usuario.senha);
        
        const result = await usuariosRepository.create(usuario);
        
        if(result === null) return res.status(StatusCodes.BAD_REQUEST).end();

        result.senha = '';

        res.status(StatusCodes.CREATED).json(result).end();

    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function loginByCodigo(req: Request, res: Response, next: any){
    try {
        const usuario = req.body as iUsuarioLogin;

        const result = await usuariosRepository.loginByCodigo(usuario);
        
        if(result === null) return res.status(StatusCodes.UNAUTHORIZED).end();        

        res.status(StatusCodes.OK).json(result).end();

    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    health,
    create,
    loginByCodigo
}