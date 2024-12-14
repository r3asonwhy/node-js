const express = require('express');
const dataRoutes = require('./routes/data.route');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);

module.exports = app;
