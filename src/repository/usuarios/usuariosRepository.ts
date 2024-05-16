import usuariosModel, { iUsuariosModel } from '../../models/usuarios/usuariosModel';

import iUsuarios from '../../models/usuarios/interfaces/iUsuarios';
import iUsuarioLogin from '../../models/usuarios/interfaces/iUsuarioLogin';

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

export default {
    create,
    findByCodigo
}