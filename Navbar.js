import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const handleLinkClick = (event) => {
        console.log('Link clicked:', event.target.innerText);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Health & Wellness</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Left-side navigation links */}
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard" onClick={handleLinkClick}>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Admin/booked-slots" onClick={handleLinkClick}>Booked Slots</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counselor/feedback" onClick={handleLinkClick}>Feedback</Link>
                        </li>
                        
                        
                        
                    </ul>
                    {/* Right-side Login and Signup links */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={handleLinkClick}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" onClick={handleLinkClick}>Signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
