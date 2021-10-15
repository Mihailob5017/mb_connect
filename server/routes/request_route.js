import express from 'express';
import {
	connectToExpert,
	getAllRequests,
	acceptRequest,
	declineRequest,
	getAcceptedRequests,
	getDeclinedRequests,
} from '../controllers/request_controller.js';
const router = express.Router();

router.post('/', getAllRequests);
router.post('/accepted', getAcceptedRequests);
router.post('/declined', getDeclinedRequests);
router.post('/connect', connectToExpert);
router.post('/connect/accept', acceptRequest);
router.post('/connect/decline', declineRequest);

export default router;
