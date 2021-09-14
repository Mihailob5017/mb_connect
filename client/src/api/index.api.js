import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Sign UP
export const SignUp = (user) => axios.post(`${API_URL}/user/sign_up`, user);
