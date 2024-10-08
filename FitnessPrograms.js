import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FitnessPrograms = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            const response = await axios.get('/api/fitness-programs');
            setPrograms(response.data);
        };
        fetchPrograms();
    }, []);

    return (
        <div>
            <h2>Fitness Programs</h2>
            <ul>
                {programs.map((program) => (
                    <li key={program.id}>{program.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FitnessPrograms;
