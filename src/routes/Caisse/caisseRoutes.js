import express from 'express';
import caisseController from '../../controllers/Caisse/caisseController.js';

const router = express.Router();

router.post('/get-caisse', caisseController.getCaisse);

export default router;
