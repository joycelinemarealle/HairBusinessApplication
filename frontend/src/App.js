import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowseRouter as Router, Routes, Rout, Link} from 'react-route-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to-"/register">Register</Link></li>
            <lil><Link to="/login">Login</Link></lil>
            <li><Link to ="/services">Services</Link></li>
            <li><Link to ="/book-appointment">Book Appointment</Link> </li>
          </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />} />
            <Route path="services" element={<Services/>}/>
            <Route path="book-appointment" element={<BookAppointment/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
