const express = require('express');
const connectDB = require('./config/connection')
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const banquetRoutes = require('./routes/banquetRoutes')

const app = express();
app.use(cors({
    origin:'http://localhost:5173',
    methods: ['GET', 'POST'], 
}))
// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

app.use(express.json());

//  routes login, register, logout
app.use('/api/auth', authRoutes);

//add update delete remove
app.use('/api/product',banquetRoutes);

// Example route
app.get('/', (req, res) => {
    res.send("API is running...");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
    console.log(`Server running 👍 http://localhost:${PORT}`);
})