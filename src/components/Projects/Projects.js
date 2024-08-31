import React from 'react';
import './Projects.css';
import { projects } from "../../utils/data";

const Projects = ({ onProjectClick }) => {
    return (
        <div className="projects-container" data-aos="fade-up">
            <h1 className="project-heading">My Latest Work</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project-card" key={index} onClick={() => onProjectClick(project)}>
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info-overlay">
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
