import express from 'express';
import { getAllRequests } from '../controllers/request_controller.js';
const router = express.Router();

router.get('/', getAllRequests);

export default router;
