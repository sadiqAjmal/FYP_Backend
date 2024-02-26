import express from 'express';
import auth from './auth'
import predict from './predict'
import { authenticateToken } from '../middlewares/authenticateToken';
const router = express.Router();
router.use('/auth',auth);
export default router;