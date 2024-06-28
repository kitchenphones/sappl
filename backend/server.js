require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const entryRoutes = require('./routes/entryRoutes');
const soldRoutes = require('./routes/soldRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/entry', entryRoutes);
app.use('/api/sold', soldRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
