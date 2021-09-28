import express from 'express';
import { getAllRequests } from '../controllers/request_controller.js';
const router = express.Router();

router.post('/', getAllRequests);

export default router;
