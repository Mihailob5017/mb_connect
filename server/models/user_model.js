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
	// REGULAR USERS
	address: { type: String },
	phone_number: { type: String },
	// Id's of experts that accepted the request
	accepted_requests: { type: [String], default: [] },
	// EXPERT USERS
	about_me: { type: String },
	service: { type: String, default: '' },
	// Is the expert Free/Taken/Disabled
	status: { type: String, default: '' },
	// Id's of users that sent you requests
	pending_requests: { type: [String], default: [] },
});

export default mongoose.model('user', userSchema);
