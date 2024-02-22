import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        // Check if any required field is missing
        if (!username || !email || !password || username === '' || email === '' || password === '') {
            throw errorHandler(400, 'All fields are required');
        }

        // Hash the password
        const hashedPassword = bcryptjs.hashSync(password, 10);

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Send a success response
        res.json({ message: 'Sign Up successfully' });
    } catch (error) {
        // Pass any errors to the error handling middleware
        next(error);
    }
};
