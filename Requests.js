import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Requests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await axios.get('/api/requests');
            setRequests(response.data);
        };
        fetchRequests();
    }, []);

    return (
        <div>
            <h2>Requests</h2>
            <ul>
                {requests.map((request) => (
                    <li key={request.id}>{request.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default Requests;
