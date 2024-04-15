import express from 'express';
import caisseController from '../../controllers/Caisse/caisseController.js';
import { requireRole } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/get-caisse', caisseController.getCaisse);
router.post('/give-amout', requireRole('CAISSIER'), caisseController.addAmountOnCaisseUser)
export default router;
