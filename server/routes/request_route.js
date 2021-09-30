import express from 'express';
import {
	connectToExpert,
	getAllRequests,
} from '../controllers/request_controller.js';
const router = express.Router();

router.post('/', getAllRequests);
router.post('/connect', connectToExpert);

export default router;
