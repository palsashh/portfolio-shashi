import React, { useEffect, useState } from "react";
import './NewNavbar.css';
import brand from '../../assets/shas.png';
import Resume from "../Resume/Resume";
import AOS from "aos";
import "aos/dist/aos.css";

const NewNavbar = () => {

    const [showResume, setShowResume] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleResumeClick = () => {
        setShowResume(true);
        setIsMenuOpen(false); // Close the menu after clicking
    }

    const handleCloseResume = () => {
        setShowResume(false);
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Close the menu after clicking
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, []);

    return (
        <nav className="navbar" data-aos="fade-down">
            <img className="b-logo" src={brand} alt="logo" onClick={() => window.location.replace("/")} />
            <button className="toggle-menu" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`menu-list ${isMenuOpen? "show" : ""}`}>
                <li><a href="#home" onClick={handleMenuItemClick}>Home</a></li>
                <li><a href="#about" onClick={handleMenuItemClick}>About</a></li>
                <li><a href="#portfolio" onClick={handleMenuItemClick}>Work</a></li>
                <li className="resume-1" onClick={handleResumeClick}>Resume</li>
                <li><a href="#contact" onClick={handleMenuItemClick}>Contact</a></li>
            </ul>
            {showResume && <Resume onClose={handleCloseResume} />}
        </nav>
    )
}


export default NewNavbar;

