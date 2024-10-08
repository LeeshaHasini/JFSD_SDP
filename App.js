import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components here
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import FitnessPrograms from './components/Admin/FitnessPrograms';
import Counselors from './components/Counselor/Counselors';  // Counselors page
import Nutritionists from './components/Nutritionist/Nutritionists';
import BookedSlots from './components/Admin/BookedSlots'; // Booked slots page
import Feedback from './components/Counselor/FeedbackForm';
import Requests from './components/Nutritionist/Requests';
import ViewUsers from './components/Admin/ViewUsers';
import AddPrograms from './components/Admin/AddPrograms';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import './App.css';

// Main App component
const App = () => {
    return (
        <Router>
            <Navbar /> {/* Navbar component is consistent across all pages */}
            
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* User routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin/add-fitnessPrograms" element={<FitnessPrograms />} />
                <Route path="/counselors" element={<Counselors />} />  {/* Counselors page */}
                <Route path="/Nutritionist/nutritionists" element={<Nutritionists />} />  {/* Nutritionists page */}

                {/* Counselor-specific routes */}
                <Route path="/Admin/booked-slots" element={<BookedSlots />} /> {/* Booked slots page */}
                <Route path="/counselor/feedback" element={<Feedback />} />

                {/* Nutritionist-specific routes */}
                <Route path="/nutritionist/requests" element={<Requests />} />

                {/* Admin routes */}
                <Route path="/admin/view-users" element={<ViewUsers />} />
                <Route path="/admin/add-fitnessPrograms" element={<FitnessPrograms />} />
                <Route path="/admin/add-programs" element={<AddPrograms />} />
            </Routes>
        </Router>
    );
};

export default App;
