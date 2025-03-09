const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("hello kya haal hai");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res)=>{
    console.log("server start 👍");
})