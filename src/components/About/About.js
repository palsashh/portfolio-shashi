import React, { useEffect } from "react";
import './About.css';
import dev from '../../assets/about-bg.png';
import AOS from "aos";


const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    })

    return (
        <div className="about-container" data-aos="fade-up">
            <div className="dev">
                <img className="dev-img" src={dev} alt="development" />
            </div>

            <div className="about">
                <h2 className="about-heading">About the Developer</h2>
                <p className="about-text">I'm Shashi, a frontend developer who loves learning and is devoted to my craft. I keep improving my abilities to create amazing user experiences and high-quality performance. With more than 2.7 years in this field, I aim to push the limits of what we can do in web development. Each day, I work to build smooth easy-to-use, and beautiful interfaces that make users happy and meet their needs.
                </p>
            </div>
        </div>
    )
}

export default About;