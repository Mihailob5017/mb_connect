import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Sign UP
export const SignUp = (user) => axios.post(`${API_URL}/user/sign_up`, user);

// Log in
export const LogIn = (body) => axios.post(`${API_URL}/user/sign_in`, body);

// Get Experts
export const getExperts = () => axios.get(`${API_URL}/user/experts`);

// Get Accepted Users
export const getAllUsers = (requestsArr) =>
	axios.post(`${API_URL}/request/all`, {
		accepted_requests: requestsArr.accepted,
		declined_requests: requestsArr.declined,
		pending_requests: requestsArr.pending,
	});

// CONNECETING TO THE USER
export const connect = (userId, expertId) =>
	axios.post(`${API_URL}/request/connect`, { userId, expertId });

export const setStatus = (status, _id) =>
	axios.post(`${API_URL}/user/status`, { status, _id });

export const acceptRequest = (_id, usersId) =>
	axios.post(`${API_URL}/request/connect/accept`, { _id, usersId });

export const declineRequest = (_id, usersId) =>
	axios.post(`${API_URL}/request/connect/decline`, { _id, usersId });
