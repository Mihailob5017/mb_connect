import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	// Common fields for all users
	id: { type: String },
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	// true => regular user
	// false => expert user
	is_regular: { type: Boolean, required: true },
	profile_pic: { type: String },

	// End of Common Fields

	// Static Fields - Generated upon account creation

	// REGULAR USERS
	address: { type: String },
	phone_number: { type: String },
	// EXPERT USERS
	price: { type: String },
	about_me: { type: String },
	service: { type: String, default: '' },
	// Is the expert Free/Taken/Disabled

	// End Od Static Fields

	// Dynamic Fields - FIelds that are interachangable throughout the interaction

	// Expert Status - Is the expert busy/unavailable/free
	// 		Busy = _id of user
	// 		Unavailable = 'unavailbable'
	// 		Free = ''
	status: { type: String, default: 'available' },

	// Expert Stats - An array of all the accepted requests and all the declined requests
	// In the array are ID'S of users that have been approved/declined
	accepted_requests: { type: [String], default: [] },
	declined_requests: { type: [String], default: [] },

	// Expert Requests - A list of users who sent a request to the current expert
	// In the array are the ID'S of pending users
	pending_requests: { type: [String], default: [] },

	// Regular Requets - A list of all requests that the user has sent out,
	// Id = id of expert which has the request been sent to
	// Status of the requets
	// 	Waiting
	// 	Accepted
	// 	Declined
	sent_requests: {
		type: [
			{
				expert_id: String,
				status: String,
			},
		],
		default: [],
	},
});

const UserModel = mongoose.model('user', userSchema);
export default UserModel;
