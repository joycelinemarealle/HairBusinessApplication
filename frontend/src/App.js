import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
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
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to ="/services">Services</Link></li>
            <li><Link to ="/book-appointment">Book Appointment</Link> </li>
          </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/services" component={Services} />
            <Route path="/book-appointment" component={BookAppointment} />
            {/* Optionally, add a catch-all route */}
            <Route component={() => <h1>404 - Page Not Found</h1>} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
