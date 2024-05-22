import usuariosModel, { iUsuariosModel } from '../../models/usuarios/usuariosModel';
import iUsuarios from '../../models/usuarios/interfaces/iUsuarios';
import iUsuarioLogin from '../../models/usuarios/interfaces/iUsuarioLogin';
import autenticacao from '../../secure/autenticacao';
import autorizacao from '../../secure/autorizacao';

function create(usuario: iUsuarios){
    return usuariosModel.create(usuario);
}

function findByCodigo(usuario: iUsuarioLogin){
    return usuariosModel.findOne<iUsuariosModel>({
        where: {
            cpf: usuario.cpf
        }
    })
}

async function loginByCodigo(usuario: iUsuarioLogin){
    const response = await findByCodigo(usuario);

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
    loginByCodigo
}