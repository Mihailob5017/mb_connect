import { request } from 'express';
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

// Connect to the expert
export const connectToExpert = async (req, res) => {
	const { userId, expertId } = req.body;

	try {
		// Add your id to pending Requests
		await User.findByIdAndUpdate(expertId, {
			$push: { pending_requests: userId },
		});
		// Add requests
		const updatedUser = await User.findByIdAndUpdate(userId, {
			$push: { sent_requests: { expert_id: expertId, status: 'waiting' } },
		});
		const allExperts = await User.find({ is_regular: false });

		res.status(200).send({
			user: updatedUser,
			experts: allExperts,
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error.message);
	}
};

// Accept Connection Request
export const acceptRequest = async (req, res) => {
	const { _id, usersId } = req.body;
	try {
		// Adds the id to accepted requests
		await User.findByIdAndUpdate(_id, {
			$push: { accepted_requests: usersId },
		});
		// // Removes the id from pending requests
		await User.findByIdAndUpdate(_id, {
			$pull: { pending_requests: usersId },
		});
		// Sets the status of the request to accepted
		let { sent_requests } = await User.findById(usersId);
		for (let request of sent_requests) {
			console.log(request);
			if (request.expert_id === _id) request.status = 'accepted';
		}
		console.log('----------------------');
		console.log(sent_requests);
		await User.findByIdAndUpdate(usersId, { sent_requests });
		res.status(200).send({
			message: 'Success',
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// Decline Connection Request
export const declineRequest = async (req, res) => {};
