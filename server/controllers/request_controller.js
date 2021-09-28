import mongoose from 'mongoose';
import User from '../models/user_model.js';

export const getAllRequests = async (req, res) => {
	const { pending_requests } = req.body;
	const users = [];

	try {
		for (const element of pending_requests) {
			let user = await User.findById(element);

			users.push(user);
		}
		res.status(200).json({ users });
	} catch (error) {
		res.status(500).send(error);
		console.log(error.message);
	}
};
