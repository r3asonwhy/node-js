const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

// Get all users
router.get('/', (req, res) => {
    const users = userService.getAllUsers();
    res.status(200).json(users);
});

// Get user by ID
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = userService.getUserById(userId);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
