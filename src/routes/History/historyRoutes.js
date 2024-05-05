import express from 'express';
import historyController from '../../controllers/History/historyController.js';

const historyRoutes = express.Router();

historyRoutes.get('/my-history', historyController.getMyTransactionHistory);
export default historyRoutes;
