const express = require('express');
const dataRoutes = require('./routes/data.route'); // Existing route
const userRoutes = require('./routes/user.route'); // New route

const app = express();
app.use(express.json());

app.use('/api/data', dataRoutes); // Existing route
app.use('/api/users', userRoutes); // New route

module.exports = app;
