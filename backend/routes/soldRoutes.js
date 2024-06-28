const express = require('express');
const router = express.Router();
const Entry = require('../models/entryModel'); // Correct path
const Sold = require('../models/soldModel'); // Correct path

router.post('/', async (req, res) => {
    const { imeiNumber, amount, invoiceNumber, store, status, date } = req.body;
    const entry = await Entry.findOne({ imeiNumbers: imeiNumber });

    if (entry) {
        entry.status = 'sold';
        await entry.save();

        const sold = new Sold({ imeiNumber, amount, invoiceNumber, store, status, date });
        await sold.save();

        res.status(201).send('Recorded and updated');
    } else {
        res.status(404).send('IMEI not found');
    }
});

module.exports = router;
