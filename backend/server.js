const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const tripRoutes = require('./routes/trips');
const bookingRoutes = require('./routes/bookings');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json()); // Parse JSON request bodies

// Route Middlewares
app.use('/api/trips', tripRoutes);
app.use('/api/bookings', bookingRoutes);

// Root Route (Sanity Check)
app.get('/', (req, res) => {
    res.send('Wanderlust Travel Agency API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});