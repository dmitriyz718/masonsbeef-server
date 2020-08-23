const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require(`dotenv`).config();
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');


//bodyparser middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// cors
app.use(cors({
    origin: [`http://localhost:3000`],
    methods: "GET,POST,PUT,DELETE",
    // credentials: true, // allows the session cookie to be sent back and forth from server to client
    optionsSuccessStatus: 200 // some legacy browsers choke on satus 204
}));

// use routes so current path is /api/items
app.use('/api/products', routes.products);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
