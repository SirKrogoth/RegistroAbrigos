import { Router } from 'express';
import usuarioController from '../../controllers/usuarios/usuariosController';
import { validarLoginUsuario } from '../../middlewares/usuarios/usuarioMiddleware';

const router = Router();

//HTTP POST
router.post('/criarUsuario', validarLoginUsuario, usuarioController.create);
router.post('/login', usuarioController.loginByCodigo);

//HTTP GET
router.get('/healthCheck', usuarioController.health);

export default router;