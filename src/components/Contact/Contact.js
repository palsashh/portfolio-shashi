import React, { useEffect } from "react";
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animation in milliseconds
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className="contact-container">
            <div className="message" data-aos="fade-up">
                <p>Let’s collaborate and create something amazing.</p>
                <p>Start by saying <span className="contact-hello"><a href="mailto:shaship7497@gmail.com">hello</a></span></p>
            </div>
            <div className="contact-details" data-aos="fade-up">
                <div className="location">
                    <i className="fa-solid fa-location-dot fa-2x"></i>&nbsp;&nbsp;New Delhi, India
                </div>
                <p className="right">
                    &copy; {new Date().getFullYear()} Shashi Pal. All rights reserved.
                </p>
                <div className="social">
                    <a href="mailto:shaship7497@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13t5aWIkxLI2TlFua-bko7d49U38uZjNWFQ&s" alt="gmail" />
                    </a>
                    <a href="https://www.instagram.com/_._shashi/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/shashi-pal/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.freepik.com/256/2504/2504923.png?ga=GA1.1.1711650620.1722021099&semt=ais_hybrid" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/palsashh" target="_blank" rel="noopener noreferrer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuxfIwbP85wISg0d8lYc8rAK3CWTuOnnWHQ&s" alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
