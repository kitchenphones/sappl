const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    username: String,
    password: String,
    accountNumber: String,
    quantities: Number,
    imeiNumbers: [String],
    billDueDate: Date,
    mobileNumbers: [String],
    storeName: String,
    date: Date,
    invoiceNumber: String,
    marketName: String,
    status: { type: String, default: 'unverified' }
});

module.exports = mongoose.model('Entry', entrySchema);
