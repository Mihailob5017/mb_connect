import mongoose from 'mongoose';
import User from '../models/user_model.js';

// SIGN IN FUNCTION
export const signIn = async (req, res) => {
	const { email, password, isAuthByGoogle } = req.body;
	console.log(email);
	try {
		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		console.log(existingUser);
		if (existingUser) {
			// Check if the password matches
			if (isAuthByGoogle === true) {
				res.status(200).json({
					message: 'Successfully Loged In',
					result: existingUser,
					is_successfull: true,
				});
				return;
			} else if (password === existingUser.password) {
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
// END OF SIGN IN

// SIGN UP
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
				price: is_regular === false ? req.body.price : null,
				status: is_regular === false ? req.body.status : null,
				pending_requests:
					is_regular === false ? req.body.pending_requests : null,
				about_me: is_regular === false ? req.body.about_me : null,
				service: is_regular === false ? req.body.service : null,
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
// END OF SIGN UP

export const getAllExperts = async (req, res) => {
	try {
		const users = await User.find({ is_regular: false });
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
		console.error(error);
	}
};
