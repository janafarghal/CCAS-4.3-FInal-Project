const supabase = require('../config/database');

class Trip {
    // Get all trips
    static async getAll() {
        const { data, error } = await supabase
            .from('trips')
            .select('*')
            .order('trip_id', { ascending: true });
        
        if (error) throw error;
        return data;
    }

    // Get single trip by ID
    static async getById(id) {
        const { data, error } = await supabase
            .from('trips')
            .select('*')
            .eq('trip_id', id)
            .single();

        if (error) throw error;
        return data;
    }

    // Create new trip
    static async create(tripData) {
        const { data, error } = await supabase
            .from('trips')
            .insert([tripData])
            .select();

        if (error) throw error;
        return data[0];
    }

    // Update trip
    static async update(id, tripData) {
        const { data, error } = await supabase
            .from('trips')
            .update(tripData)
            .eq('trip_id', id)
            .select();

        if (error) throw error;
        return data[0];
    }

    // Delete trip
    static async delete(id) {
        const { error } = await supabase
            .from('trips')
            .delete()
            .eq('trip_id', id);

        if (error) throw error;
        return true;
    }
}

module.exports = Trip;