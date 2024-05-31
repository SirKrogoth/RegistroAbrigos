import bcrypt from 'bcryptjs';
import jwt, { VerifyOptions } from 'jsonwebtoken';
import fs from 'fs';

const privateKey = fs.readFileSync('./keys/private.key', 'utf-8');
const publicKey = fs.readFileSync('./keys/public.key', 'utf-8');
const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
const jwtAlgoritm = "RS256";

type Token = {
    codigo: string;
}

function sign(codigo: string){
    const token: Token = { codigo }

    return jwt.sign(token, privateKey, {
        expiresIn: jwtExpires,
        algorithm: jwtAlgoritm
    });
}

function verify(token: string){
    try {
        const decoded = jwt.verify(token, publicKey, {
            algorithms: [jwtAlgoritm]
        } as VerifyOptions) as Token;

        return {
            decoded
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default {
    sign,
    verify
}