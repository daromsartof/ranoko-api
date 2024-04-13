import express from 'express';
import caisseRoutes from './Caisse/caisseRoutes.js';
import ranoRoutes from './Rano/ranoRoutes.js';
import userRoutes from './User/userRoutes.js';
import authenticateToken from "../middlewares/authMiddleware.js";
const router = express.Router();
router.use(authenticateToken);

router.use(userRoutes);
router.use(ranoRoutes);
router.use(caisseRoutes);

export default router;
