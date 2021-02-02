import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controller/AuthCotroller';
import { validar } from '../middlewares/validation';
import { password } from '../services/passport';

const router = Router()

router.post('/register', [
    body('name'),
    body('username'),
    body('password').isLength({min: 4}).withMessage('Contraseña minimo 8 caracteres'),
    body('email').isEmail().withMessage('Email no valido'),
    body('id').not().exists().withMessage('El ID es automatico')
],validar,AuthController.register);
router.post('/login', password(), AuthController.login);

export default router;