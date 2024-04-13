import express from 'express';
//import ranoRoute from './Rano/ranoRoutes.js';
import userRoutes from './User/userRoutes.js';
import authenticateToken from "../middlewares/authMiddleware.js";
const router = express.Router();
router.use(authenticateToken);

router.use(userRoutes);
//router.use(ranoRoute);

export default router;
