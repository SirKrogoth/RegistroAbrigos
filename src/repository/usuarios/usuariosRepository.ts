import usuariosModel, { iUsuariosModel } from '../../models/usuarios/usuariosModel';
import iUsuarios from '../../models/usuarios/interfaces/iUsuarios';
import iUsuarioLogin from '../../models/usuarios/interfaces/iUsuarioLogin';
import autenticacao from '../../secure/autenticacao';
import autorizacao from '../../secure/autorizacao';

function create(usuario: iUsuarios){
    return usuariosModel.create(usuario);
}

function findByCPF(usuario: iUsuarioLogin){
    return usuariosModel.findOne<iUsuariosModel>({
        where: {
            cpf: usuario.cpf
        }
    })
}

function findByCodigo(codigo: string){
    return usuariosModel.findOne<iUsuariosModel>({
        where: {
            codigo: codigo
        }
    });
}

async function loginByCPF(usuario: iUsuarioLogin){
    const response = await findByCPF(usuario);

    if(response === null) return null;

    const isValid = autenticacao.comparePassword(usuario.senha, response.senha);

    if(isValid){        
        response.senha = '';

        const token = autorizacao.sign(response.codigo);

        return {
            auth: true,
            response,
            token
        }
    } else{
        return null;
    }
}

export default {
    create,
    findByCodigo,
    loginByCPF
}