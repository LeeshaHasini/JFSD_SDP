import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Counselors = () => {
    const [counselors, setCounselors] = useState([]);

    useEffect(() => {
        const fetchCounselors = async () => {
            const response = await axios.get('/api/counselors');
            setCounselors(response.data);
        };
        fetchCounselors();
    }, []);

    return (
        <div>
            <h2>Counselors</h2>
            <ul>
                {counselors.map((counselor) => (
                    <li key={counselor.id}>{counselor.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Counselors;
