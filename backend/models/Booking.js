const supabase = require('../config/database');

class Booking {
    // Get all bookings (Join with Trip to get Destination name)
    static async getAll() {
        // We select all booking columns, plus the destination from the related trips table
        const { data, error } = await supabase
            .from('bookings')
            .select(`
                *,
                trips (
                    destination
                )
            `)
            .order('booking_id', { ascending: true });

        if (error) throw error;

        // Flatten the data structure for the frontend
        return data.map(booking => ({
            ...booking,
            destination: booking.trips ? booking.trips.destination : 'Unknown Trip'
        }));
    }

    static async getById(id) {
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .eq('booking_id', id)
            .single();

        if (error) throw error;
        return data;
    }

    static async create(bookingData) {
        const { data, error } = await supabase
            .from('bookings')
            .insert([bookingData])
            .select();

        if (error) throw error;
        return data[0];
    }

    static async update(id, bookingData) {
        const { data, error } = await supabase
            .from('bookings')
            .update(bookingData)
            .eq('booking_id', id)
            .select();

        if (error) throw error;
        return data[0];
    }

    static async delete(id) {
        const { error } = await supabase
            .from('bookings')
            .delete()
            .eq('booking_id', id);

        if (error) throw error;
        return true;
    }
}

module.exports = Booking;