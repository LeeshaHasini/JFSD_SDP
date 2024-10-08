import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookedSlots = () => {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const fetchBookedSlots = async () => {
            const response = await axios.get('/api/booked-slots');
            setSlots(response.data);
        };
        fetchBookedSlots();
    }, []);

    return (
        <div>
            <h2>Booked Slots</h2>
            <ul>
                {slots.map((slot) => (
                    <li key={slot.id}>{slot.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookedSlots;
