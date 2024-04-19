import React, { useState } from "react"
import projectsData from "../json/Projects.json"

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div className="projects">
            {projectsData.map(project => (
                <div
                    className={`card ${hoveredProject === project.id ? 'hovered' : ''}`}
                    key={project.id}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                    <img src={project.image} alt={project.name} />
                    <div className="info">
                        <p className="name">{project.name}</p>
                        <p className="tech">{project.tech}</p>
                        {hoveredProject === project.id && (
                            <div className="extra-info">
                                <p>{project.info}</p>
                                <div className="links">
                                    <a href={project.linkGithub} >
                                        <img className="icon" src="https://svgur.com/i/14L9.svg" alt={project.name} />
                                    </a>
                                    <a href={project.linkWeb} >
                                        <img className="icon" src="https://i.imgur.com/ykjyx1q.png" alt={project.name} />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
