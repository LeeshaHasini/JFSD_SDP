import React from 'react';
import './Dashboard.css'; // Ensure you have a CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <p>Here you can manage your wellness resources.</p>
            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h3>Quick Access</h3>
                    <ul>
                        <li><a href="/admin/add-fitnessPrograms">Fitness Programs</a></li>
                        <li><a href="/counselors">Counselors</a></li>
                        <li><a href="/Nutritionist/nutritionists">Nutritionists</a></li>
                        <li><a href="/admin/add-programs">Add Programs</a></li>
                        <li><a href="/admin/view-users">View Users</a></li>
                    </ul>
                </div>
                <div className="dashboard-card">
                    <h3>Statistics</h3>
                    <p>Total Users: 120</p>
                    <p>Active Sessions: 35</p>
                    <p>Feedback Received: 10</p>
                </div>
                <div className="dashboard-card">
                    <h3>Recent Activities</h3>
                    <ul>
                        <li>User John Doe completed a fitness program.</li>
                        <li>Nutritionist Jane Smith scheduled a consultation.</li>
                        <li>Feedback received from user Alice Brown.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
