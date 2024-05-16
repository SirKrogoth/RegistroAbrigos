import { Router } from 'express';
import abrigosController from '../../controllers/abrigos/abrigosController';

const router = Router();

//HTTP POST
router.post('/criarAbrigo', abrigosController.create);

//HTTP GET
router.get('/health', abrigosController.health);

export default router;