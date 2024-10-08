import React, { useState } from 'react';
import './AddPrograms.css'; // Ensure you have a CSS file for styling

const AddPrograms = () => {
    const [programName, setProgramName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [level, setLevel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the submission logic, like sending data to your backend
        console.log({ programName, description, duration, level });
    };

    return (
        <div className="add-programs">
            <h2>Add New Fitness Program</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="programName">Program Name:</label>
                    <input
                        type="text"
                        id="programName"
                        value={programName}
                        onChange={(e) => setProgramName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration (weeks):</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="level">Level:</label>
                    <select
                        id="level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        required
                    >
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <button type="submit">Add Program</button>
            </form>
        </div>
    );
};

export default AddPrograms;
