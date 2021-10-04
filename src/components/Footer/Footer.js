import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer-div">
            <div>
                <h1>Dance Studio</h1>
                <div className="btn-div">
                    <button><i className="icon-style  fa-3x fab fa-instagram me-2"></i></button>
                    <button><i className="icon-style fab  fa-3x fa-facebook-square me-2"></i></button>
                    <button><i className="icon-style  fa-3x fab fa-twitter me-2"></i></button>
                    <button><i className="icon-style  fa-3x fab fa-linkedin"></i></button>
                </div>
                <p className="btn-div">Privacy Policy / This is a sample website - cmsmasters © 2021 / All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;