import express from 'express';

import authRoutes from './authRoutes.js';
import apiRoutes from './apiRoutes.js';

const router = express.Router();

router.use('/api', apiRoutes);
router.use(authRoutes);

export default router;
