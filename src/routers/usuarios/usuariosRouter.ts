import { Router } from 'express';
import usuarioController from '../../controllers/usuarios/usuariosController';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

//HTTP POST
router.post('/usuarios/criarUsuario', usuarioController.create);
router.post('/usuarios/login', usuarioController.loginByCPF);

//HTTP GET
router.get('/usuarios/detalhesDoUsuario', isAuthenticated, usuarioController.detalhesDoUsuario);
router.get('/usuarios/healthCheck', usuarioController.health);

export default router;