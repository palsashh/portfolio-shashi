// Resume.js
import React from 'react';
import resumeFile from '../../assets/Shashi_Pal_CV.pdf';
import './Resume.css';

const Resume = ({ onClose }) => {
    return (
        <div className="resume-modal">
            <div className="resume-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>My Resume</h2>
                <iframe src={resumeFile} title="Resume" className="resume-viewer"></iframe>
                <div className="resume-download">
                    <a href={resumeFile} download="Shashi-Pal_Resume.pdf">Download Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Resume;
