// Importing Required Libraries
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Importing Routes
import user_route from './routes/user_route.js';
import request_route from './routes/request_route.js';

// Enabling env so we can keep all our secrets there
dotenv.config();

// Setting up all the constants
const MONGODB_URL = process.env.MONGODB_URL;

const PORT = process.env.PORT;
// Start the express server
const app = express();

// Limit the maximum size of the transfer
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Enable Cross Site Sharing
app.use(cors());

// Connecting to MongoDB
mongoose
	.connect(MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on PORT ${PORT} and is connected to MongoDB`);
		});
	})
	.catch((err) => {
		console.error(err.message);
	});

// Defining Routes
app.use('/user', user_route);
app.use('/request', request_route);
