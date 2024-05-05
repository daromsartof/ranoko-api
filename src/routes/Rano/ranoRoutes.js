import express from 'express';
import ranoController from '../../controllers/Rano/ranoController.js';

const router = express.Router();

router.post('/take-water', ranoController.takeWaterAction);
router.get('/ranoko', ranoController.myWaterAction);
export default router;