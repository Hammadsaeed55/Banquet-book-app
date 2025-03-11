const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

//Load environment variables
dotenv.config();

//register Controllers---------------------------------//
const register = async (req, res) => {
    const { name, email, password, phone, address, role } = req.body;

    try {
        // Check if the user already exists        
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        user = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            role
        });
        await user.save();

        return res.status(201).json({ success: true, message: "Registered successfully" });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error in registration: ${error.message}`
        });
    }
};



//Login Controllers------------------------------------//
const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ success: false, message: "user does not exist" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
        return res.status(401).json({ success: false, message: "Password not match" });
    }

    const token = jwt.sign({ id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' });

    return res.status(201).json({
        success: true,
        message: "Login Successfully",
        token,
        user: {
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            role: user.role,
            address: user.address
        }
    })

}

module.exports = { register, login };