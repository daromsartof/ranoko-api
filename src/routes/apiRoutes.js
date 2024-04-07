import express from 'express';
import userRoutes from './User/userRoutes.js';
import authenticateToken from "../middlewares/authMiddleware.js";
const router = express.Router();
router.use(authenticateToken);

router.use(userRoutes);

export default router;
