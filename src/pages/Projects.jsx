import React from "react"
import CardProject from '../components/CardProject'

function Projects({ language, toggleLanguage }) {

    return (

        <div className="projects-page">

            <CardProject
                language={language}
                toggleLanguage={toggleLanguage}
            />

        </div>
    );
}

export default Projects;
