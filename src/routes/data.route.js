const express = require('express');
const router = express.Router();
const mockData = require('../data/mockData');

// GET all data
router.get('/', (req, res) => {
    res.status(200).json(mockData);
});

// GET data by ID
router.get('/:id', (req, res) => {
    const item = mockData.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

module.exports = router;
