const express = require('express');
const router = express.Router();
const Cat = require('../models/cat'); // Import the Cat model

// Route to get all cats
router.get('/', async (req, res) => {
    try {
        const cats = await Cat.find(); // Fetch all cats from the database
        res.json(cats); // Send the cats as a JSON response
    } catch (err) {
        res.status(500).json({ message: err.message }); // Send an error response if something goes wrong
    }
});

// Get cats filtered by query 
router.get('/match', async (req, res) => {
    try {
        const { goodWith, energyLevel } = req.query;
        let filter = {};
        if (goodWith) filter.goodWith = { $in: [goodWith] }; // Filter cats that are good with the specified type (e.g., dogs, children)
        if (energyLevel) filter.energyLevel = energyLevel; // Filter cats that match the specified energy level
        const cats = await Cat.find(filter); // Fetch cats from the database that match the filter criteria
        res.json(cats); // Send the filtered cats as a JSON response
    } catch (err) {
        res.status(500).json({ message: err.message }); // Send an error response if something goes wrong
    }
});

// Adding cats to the database
router.post('/', async (req, res) => {
    try {
        const cat = new Cat(req.body);
        const savedCat = await cat.save(); // Save the new cat to the database
        res.status(201).json(savedCat); // Send the saved cat as a JSON response
    } catch (err) {
        res.status(400).json({ message: err.message }); // Send an error response if something goes wrong
    }
});

module.exports = router; // Export the router so it can be used in other parts of the application