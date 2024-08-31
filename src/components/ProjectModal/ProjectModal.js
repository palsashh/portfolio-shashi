import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="project-modal">
            <div className="project-content">
                <button className="btn-close" onClick={onClose}>X</button>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>
                <hr></hr>
                <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
