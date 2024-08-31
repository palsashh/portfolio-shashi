import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ProjectModal from './components/ProjectModal/ProjectModal';
import NewNavbar from './components/NewNavbar/NewNavbar';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  }

  const handleCloseProject = () => {
    setSelectedProject(null);
  }

  return (
    <div className="App">
      <NewNavbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Projects onProjectClick={handleProjectClick} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseProject} />
      )}
    </div>
  );
}

export default App;
