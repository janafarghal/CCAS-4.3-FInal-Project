const Booking = require('../models/Booking');

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.getAll();
        res.status(200).json({ success: true, data: bookings });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.getById(req.params.id);
        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        res.status(404).json({ success: false, error: 'Booking not found' });
    }
};

exports.createBooking = async (req, res) => {
    try {
        const newBooking = await Booking.create(req.body);
        res.status(201).json({ success: true, data: newBooking });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const updatedBooking = await Booking.update(req.params.id, req.body);
        res.status(200).json({ success: true, data: updatedBooking });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        await Booking.delete(req.params.id);
        res.status(200).json({ success: true, message: 'Booking deleted' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};