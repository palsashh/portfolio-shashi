import React, { useEffect } from "react";
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import gif from '../../assets/greet.gif';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, []);


    return (
        <div className="home" data-aos="zoom-in">
            <div className="text-container">
                <p className="greet">Hey There, I'm</p>
                <h1 className="name">Shashi Pal</h1>
                <h2 className="role">Frontend Developer</h2>
                <p className="tagline">I Create user-friendly and visually appealing web solutions.</p>
                <div className="connect">
                    <a href="https://www.linkedin.com/in/shashipal1/" target="_blank" rel="noopener noreferrer"><button className="connect-btn" >Let's Connect <i class="fa-solid fa-hand-sparkles"></i></button></a>
                </div>
            </div>
            <div className="hello">
                <img src={gif} alt="hey-animation"></img>
            </div>

        </div>
    )
}

export default Home;