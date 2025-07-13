const express = require('express');
const dotenv = require('dotenv');
const scanRoutes = require('./routes/scan');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/scan', scanRoutes);

app.get('/', (req, res) => {
    res.send('AutoShield Backend API is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
