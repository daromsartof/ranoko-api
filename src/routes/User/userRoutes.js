import express from 'express';
import userController from '../../controllers/User/userController.js';

const router = express.Router();

router.get('/get-user', userController.getUser);

export default router;
