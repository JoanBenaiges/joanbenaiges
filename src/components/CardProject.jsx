import React, { useState, useEffect } from "react";
import projectsData from "../json/Projects.json";

function CardProject({ language }) {

    const [showProject, setShowProject] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowProject(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`list-projects ${showProject ? 'animated-card' : ''}`}>

            {projectsData.map((project, index) => (

                <div class="card-project">
                    <div class="card-wrapper">

                        <div class="card-face front" style={{ backgroundImage: `url(${project.image})` }}>

                            <div class="card-content">
                                <div class="card-title">{project.name}</div>

                            </div>

                        </div>

                        <div class="card-face back">
                            <div class="card-content">

                                <div class="card-tech">{project.tech}</div>
                                {language === 'en' ? (

                                    <div class="card-description">{project.infoEnglish}</div>

                                ) : (

                                    <div class="card-description">{project.info}</div>

                                )}

                                <div className="links">

                                    <a href={project.linkGithub} target="_blank">
                                        <img className="icon" src="https://svgur.com/i/14L9.svg" alt={project.name} />
                                    </a>

                                    <a href={project.linkWeb} target="_blank">
                                        <img className="icon" src="https://i.imgur.com/ykjyx1q.png" alt={project.name} />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default CardProject;
