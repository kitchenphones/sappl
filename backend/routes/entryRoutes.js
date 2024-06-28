const express = require('express');
const router = express.Router();
const Entry = require('../models/entryModel'); // Correct path

router.post('/', async (req, res) => {
    const entry = new Entry(req.body);
    try {
        await entry.save();
        res.status(201).send('Entry saved');
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
