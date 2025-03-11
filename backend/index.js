const express = require('express');
const connectDB = require('./config/connection')

const app = express();

connectDB();
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("hello kya haal hai");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res)=>{
    console.log("server start 👍");
})