import React, { useState } from "react";
import CardSkill from '../components/CardSkill';
import frontendSkills from '../json/FrontendSkills.json';
import backendSkills from '../json/BackendSkills.json';
import tools from '../json/Tools.json';

function About({ language, toggleLanguage }) {
    const [selectedOption, setSelectedOption] = useState('Frontend');

    return (
        <div className="aboutme-page">

            <section className="aboutme-text">
                <h2>About me</h2>
                <p>
                    After a significant career change in my life, I decided to dive into the exciting
                    world of programming, something that had always intrigued me. I began my journey
                    at Ironhack bootcamp, where I experienced exponential growth in my knowledge and skills.
                    <br />
                    <br />
                    I consider myself a patient and persistent individual, driven by a strong motivation
                    to continue learning and growing in this ever-evolving field. My goal is to contribute
                    my passion and expertise to the development of innovative and successful web projects.
                    I'm excited to share my work with you.
                    <br />
                    <br />
                    Thank you for visiting my portfolio and happy code!
                </p>

            </section>

            <section className="skills">
                <div className="menu">
                    <button className={selectedOption === 'Frontend' ? 'selected' : ''} onClick={() => setSelectedOption('Frontend')}>Frontend</button>
                    <button className={selectedOption === 'Backend' ? 'selected' : ''} onClick={() => setSelectedOption('Backend')}>Backend</button>
                    <button className={selectedOption === 'Tools' ? 'selected' : ''} onClick={() => setSelectedOption('Tools')}>{language === 'en' ? 'Tools' : 'Herramientas'}</button>
                </div>

                <hr />
                <div className="all-skills">
                    {selectedOption === 'Frontend' && <CardSkill skills={frontendSkills} />}
                    {selectedOption === 'Backend' && <CardSkill skills={backendSkills} />}
                    {selectedOption === 'Tools' && <CardSkill skills={tools} />}
                </div>
            </section>
        </div >
    );
}

export default About;
