const Trip = require('../models/Trip');

// Get all trips
exports.getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.getAll();
        res.status(200).json({ success: true, data: trips });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get single trip
exports.getTripById = async (req, res) => {
    try {
        const trip = await Trip.getById(req.params.id);
        res.status(200).json({ success: true, data: trip });
    } catch (error) {
        res.status(404).json({ success: false, error: 'Trip not found' });
    }
};

// Create trip
exports.createTrip = async (req, res) => {
    try {
        const newTrip = await Trip.create(req.body);
        res.status(201).json({ success: true, data: newTrip });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update trip
exports.updateTrip = async (req, res) => {
    try {
        const updatedTrip = await Trip.update(req.params.id, req.body);
        res.status(200).json({ success: true, data: updatedTrip });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete trip
exports.deleteTrip = async (req, res) => {
    try {
        await Trip.delete(req.params.id);
        res.status(200).json({ success: true, message: 'Trip deleted' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};