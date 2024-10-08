import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Nutritionists = () => {
    const [nutritionists, setNutritionists] = useState([]);

    useEffect(() => {
        const fetchNutritionists = async () => {
            const response = await axios.get('/api/nutritionists');
            setNutritionists(response.data);
        };
        fetchNutritionists();
    }, []);

    return (
        <div>
            <h2>Nutritionists</h2>
            <ul>
                {nutritionists.map((nutritionist) => (
                    <li key={nutritionist.id}>{nutritionist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Nutritionists;
