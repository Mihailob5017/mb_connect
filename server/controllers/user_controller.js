import mongoose from 'mongoose';
import User from '../models/user_model.js';

export const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			// Check if the password matches
			if (password === existingUser.password) {
				res.status(200).json({
					message: 'Successfully Loged In',
					result: existingUser,
					is_successfull: true,
				});
				return;
			} else {
				res.status(404).json({
					message: 'Password Mismatch',
					is_successfull: false,
				});
				return;
			}
		} else {
			res.status(404).json({
				message: 'User does not exist',
				is_successfull: false,
			});
			return;
		}
	} catch (error) {
		res.status(500).json({
			message: 'There has been an Server Error',
			error,
			is_successfull: false,
		});
		console.error(error);
		return;
	}
};

export const signUp = async (req, res) => {
	const { first_name, last_name, email, password, profile_pic, is_regular } =
		req.body;

	try {
		// Check if the account already exits
		const doesUserExist = await User.findOne({ email });
		if (doesUserExist) {
			// If exists: Send an error message stating that the account already exists
			res
				.status(404)
				.json({ message: 'This email already exists', is_successfull: false });
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
			res.status(200).json({
				message: 'Account Successfully Created',
				result,
				is_successfull: true,
			});
			return;
		}
	} catch (error) {
		res.status(500).json({
			message: 'There has been an Server Error',
			error,
			is_successfull: false,
		});
		console.error(error);
		return;
	}
};
