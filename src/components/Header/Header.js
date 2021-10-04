import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [text, setText] = useState('Home');
    const handleButton = (e) => {
        setText(e);
    }
    console.log(text);
    // const value = handleButton();
    // console.log(value);

    return (
        <section className="header-container">
            <h1 className="text-center headline">Chittagong Dancing Institute</h1>
            <div className="mt-5 d-flex justify-content-evenly align-items-center">
                <h3>{text}</h3>
                <nav>
                    <Link className="home a me-3" onClick={() => handleButton("Home")} to="/">Home</Link>
                    <Link className="about a me-3" onClick={() => handleButton("About US")} to="/aboutus">About Us</Link>
                    <Link className="service a me-3" onClick={() => handleButton("Services")} to="/services">Services</Link>
                    <Link className="contact a ms-2" onClick={() => handleButton("Contact US")} to="/contactus">Contact Us</Link>
                </nav>

            </div>
        </section>
    );
};

export default Header;