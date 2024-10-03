import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/equipos',controller.equipos)
router.get('/versiones',controller.versiones)
router.get('/sync',controller.not_sync)
router.get('/preciosyarts',controller.Precios_arts)
router.get('/equipos_frq',controller.equipos_frq)
router.get('/versiones_frq',controller.versiones_frq)
router.get('/sync_frq',controller.not_sync_frq)
router.get('/preciosyarts_frq',controller.Precios_arts_frq)
router.get('/db_spaceprp',controller.DB_SPACE_PRP)
router.get('/hd_spaceprp',controller.HD_SPACE_PRP)
router.get('/ventas_mes_corriente',controller.ventas_mes_corriente)
router.get('/promos_prp',controller.promos_prp)
router.get('/promos_frq',controller.promos_frq)
router.post('/usuarios',controller.usuarios)
router.get('/deli',controller.dashdeli)


export default router