import express from 'express';
import {
	signIn,
	signUp,
	getAllExperts,
} from '../controllers/user_controller.js';

const router = express.Router();

router.get('/experts', getAllExperts);
router.post('/sign_in', signIn);
router.post('/sign_up', signUp);

export default router;
