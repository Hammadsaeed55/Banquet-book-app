const express = require('express');
const connectDB = require('./config/connection')
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

app.use(cors());
app.use(express.json());

// Use the imported routes
app.use('/api/auth', authRoutes)

// Example route
app.get('/', (req, res) => {
    res.send("API is running...");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
    console.log(`Server running 👍 on port ${PORT}`);
})