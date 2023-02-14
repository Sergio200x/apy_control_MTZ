import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/equipos',controller.equipos)
router.get('/locales',controller.locales)

export default router