import { Router } from 'express';
import usuarioController from '../../controllers/usuarios/usuariosController';

const router = Router();

//HTTP POST
router.post('/criarUsuario', usuarioController.create);
router.post('/login', usuarioController.findByCodigo);

//HTTP GET
router.get('/healthCheck', usuarioController.health);

export default router;