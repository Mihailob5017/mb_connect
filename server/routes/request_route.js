import express from 'express';
import {
	connectToExpert,
	getAllRequests,
	acceptRequest,
	declineRequest,
} from '../controllers/request_controller.js';
const router = express.Router();

router.post('/all', getAllRequests);
router.post('/connect', connectToExpert);
router.post('/connect/accept', acceptRequest);
router.post('/connect/decline', declineRequest);

export default router;
