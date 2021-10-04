import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Sign UP
export const SignUp = (user) => axios.post(`${API_URL}/user/sign_up`, user);

// Log in
export const LogIn = (body) => axios.post(`${API_URL}/user/sign_in`, body);

// Get Experts
export const getExperts = () => axios.get(`${API_URL}/user/experts`);

// Get Pending Users
export const getPendingUsers = (requestsArr) =>
	axios.post(`${API_URL}/request`, { pending_requests: requestsArr });

// Send Request
export const connect = (userId, expertId) =>
	axios.post(`${API_URL}/request/connect`, { userId, expertId });

export const setStatus = (status, _id) =>
	axios.post(`${API_URL}/user/status`, { status, _id });
