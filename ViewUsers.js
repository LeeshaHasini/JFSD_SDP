import React from 'react';
import './ViewUsers.css'; // Ensure you have a CSS file for styling

const ViewUsers = () => {
    // Sample users data
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Nutritionist' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Counselor' },
        { id: 4, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Admin' },
        { id: 5, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'User' },
        { id: 6, name: 'David Wilson', email: 'david.wilson@example.com', role: 'Nutritionist' },
        { id: 7, name: 'Sophia Taylor', email: 'sophia.taylor@example.com', role: 'Counselor' },
        { id: 8, name: 'Daniel Martinez', email: 'daniel.martinez@example.com', role: 'Admin' },
        { id: 9, name: 'Olivia Garcia', email: 'olivia.garcia@example.com', role: 'User' },
        { id: 10, name: 'James Anderson', email: 'james.anderson@example.com', role: 'User' },
    ];

    return (
        <div className="view-users">
            <h2>Users List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewUsers;
