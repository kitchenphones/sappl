// backend/models/soldModel.js
const mongoose = require('mongoose');

const soldSchema = new mongoose.Schema({
    imeiNumber: String,
    amount: Number,
    invoiceNumber: String,
    store: String,
    status: String,
    date: Date
});

module.exports = mongoose.model('Sold', soldSchema);
