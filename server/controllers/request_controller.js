import User from '../models/user_model.js';

export const getAllRequests = async (req, res) => {
	const { pending_requests, accepted_requests, declined_requests } = req.body;
	const pendingUsers = [];
	const acceptedUsers = [];
	const declinedUsers = [];
	try {
		const allUsers = await User.find();
		// Here LIES THE PROBLEM
		// FILTERING DOESNT WORK FOR SOME REASON
		// CHECK OUT WHY
		for (let user of allUsers) {
			if (pending_requests.includes(user._id.toString()) === true)
				pendingUsers.push(user);
			if (accepted_requests.includes(user._id.toString()) === true)
				acceptedUsers.push(user);
			if (declined_requests.includes(user._id.toString()) === true)
				declinedUsers.push(user);
		}

		res.status(200).json({
			allUsers: {
				pendingUsers,
				acceptedUsers,
				declinedUsers,
			},
		});
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
			$pull: { pending_requests: usersId },
		});
		const updatedUser = await User.findById(_id);
		// Sets the status of the request to accepted
		let { sent_requests } = await User.findById(usersId);
		for (let request of sent_requests) {
			if (request.expert_id === _id) request.status = 'accepted';
		}

		await User.findByIdAndUpdate(usersId, { sent_requests });
		const removedUser = await User.findById(usersId);
		res.status(200).send({
			message: `You have accepted a Request from ${
				removedUser.first_name + ' ' + removedUser.last_name
			}.They  will be waiting for you to reach out`,
			updatedUser: updatedUser,
			removedUserId: usersId,
			removedUser,
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// Decline Connection Request
export const declineRequest = async (req, res) => {
	const { _id, usersId } = req.body;
	try {
		// Adds the id to accepted requests
		await User.findByIdAndUpdate(_id, {
			$push: { declined_requests: usersId },
			$pull: { pending_requests: usersId },
		});
		const updatedUser = await User.findById(_id);
		// Sets the status of the request to accepted
		let { sent_requests } = await User.findById(usersId);
		for (let request of sent_requests) {
			if (request.expert_id === _id) request.status = 'declined';
		}
		await User.findByIdAndUpdate(usersId, { sent_requests });
		const removedUser = await User.findById(usersId);
		res.status(200).send({
			message: `You have declined a Request from ${
				removedUser.first_name + ' ' + removedUser.last_name
			}.However,they will be able to send  you more requests in the future`,
			updatedUser: updatedUser,
			removedUserId: usersId,
			removedUser,
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};
