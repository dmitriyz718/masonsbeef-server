const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require(`dotenv`).config();
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 5000;

//bodyparser middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// cors
app.use(cors());



// use routes so current path is /api/products
app.use('/api/products', routes.products);
//auth - create delete and update users
app.use('/api/auth', routes.auth);
// auth verification - verify tokens
app.use('/api/verify', routes.verify);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
