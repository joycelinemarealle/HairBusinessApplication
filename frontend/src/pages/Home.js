import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <div>
            <h1>Welcome to Booboo Kitty's Hair Transformation App! </h1>
            <p> This is the home page. From here you can: </p>
            <ul>
                <li><Link to="/register">Register as a Customer</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/book-appointment">book-appointment</Link></li>
            </ul>
            <p>Feel free to explore and start you hair transformation journey!</p>
        </div>
    );
}

export default Home;