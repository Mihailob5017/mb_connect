import mongoose from 'mongoose';
import User from '../models/user_model.js';

export const signIn = async (req, res) => {
	// Check if the email and password are correct
	// If correct: procced to log in
	// If not: send an error message,telling the paramaters are incorect
};

export const signUp = async (req, res) => {
	const { first_name, last_name, email, password, profile_pic, is_regular } =
		req.body;

	try {
		// Check if the account already exits
		const doesUserExist = await User.findOne({ email });
		if (doesUserExist) {
			// If exists: Send an error message stating that the account already exists
			res.status(404).json({ message: 'This email already exists' });
			return;
		} else {
			// If not: Create a new account
			const newUser = {
				// Common
				first_name,
				last_name,
				email,
				password,
				is_regular,
				profile_pic,
				// Regular User Exclusive
				address: is_regular === true ? req.body.address : null,
				phone_number: is_regular === true ? req.body.phone_number : null,
				accepted_requests:
					is_regular === true ? req.body.accepted_requests : null,
				// Expert User Exclusive
				status: is_regular === false ? req.body.status : null,
				pending_requests:
					is_regular === false ? req.body.pending_requests : null,
			};
			const result = await User.create(newUser);
			res.status(200).json({ message: 'Account Successfully Created', result });
			return;
		}
	} catch (error) {
		res.status(500).json({ message: 'There has been an Server Error', error });
		console.error(error);
		return;
	}
};
