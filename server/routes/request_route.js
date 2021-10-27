import express from 'express';
import {
	connectToExpert,
	getAllRequests,
	acceptRequest,
	declineRequest,
	removeConnection,
} from '../controllers/request_controller.js';
const router = express.Router();

router.post('/all', getAllRequests);
router.post('/connect', connectToExpert);
router.post('/connect/accept', acceptRequest);
router.post('/connect/decline', declineRequest);
router.post('/connect/remove', removeConnection);

export default router;
