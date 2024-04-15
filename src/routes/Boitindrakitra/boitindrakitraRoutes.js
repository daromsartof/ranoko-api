import express from 'express';
import boitindrakitraController from '../../controllers/Boitindrakitra/boitindrakitraController.js';

const router = express.Router();

router.get('/boitindrakitra', boitindrakitraController.getBoitindrakitra);

export default router;
