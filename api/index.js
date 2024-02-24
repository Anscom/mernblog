import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoute from './routes/auth.route.js';
import postRoutes from './routes/post.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit with failure
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to my API');
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
