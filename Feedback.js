import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            const response = await axios.get('/api/feedbacks');
            setFeedbacks(response.data);
        };
        fetchFeedbacks();
    }, []);

    return (
        <div>
            <h2>Feedback</h2>
            <ul>
                {feedbacks.map((feedback) => (
                    <li key={feedback.id}>{feedback.comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default Feedback;
