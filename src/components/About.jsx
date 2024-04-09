import React, { useEffect, useState } from "react";
import skillsData from '../json/Skills.json'

function About() {
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTitle(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-page">
            <div className="info">
                <div className="about-me">
                    <div className="image"></div>
                    <div className="my-text">
                        <div className="title-container">
                            <h1 className={showTitle ? "show-title" : ""}>¡Hey! I'm Joan.</h1>
                        </div>
                        <p>
                            After a significant career change in my life, I decided to dive into the exciting
                            world of programming, something that had always intrigued me. I began my journey
                            at Ironhack bootcamp, where I experienced exponential growth in my knowledge and skills.
                            <br />
                            <br />
                            I consider myself a patient and persistent individual, driven by a strong motivation
                            to continue learning and growing in this ever-evolving field. My goal is to contribute
                            my passion and expertise to the development of innovative and successful web projects.
                            <br />
                            <br />
                            Thank you for visiting my portfolio! I'm excited to share my work with you.
                        </p>
                    </div>
                </div>

                <div className="buttons-contact">

                    <a className="button" href="https://www.linkedin.com/in/joan-benaiges-94bb9460/" style={{ '--color': '#32CD32' }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        LinkedIn
                    </a>

                    <a className="button" href="https://github.com/JoanBenaiges" style={{ '--color': '#32CD32' }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        GitHub
                    </a>

                    <a className="button" href="https://drive.google.com/file/d/15eZedM1myxl320ihoY4NOHkOGhpdsrC6/view" style={{ '--color': '#32CD32' }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        My CV
                    </a>

                </div>
            </div>

            <div className="skills">

                <h1>Skills</h1>

                <div className="top">
                    {skillsData.slice(0, 3).map(skill => (
                        <div className="image-and-name" key={skill.id}>
                            <img src={`https://svgur.com/i/${skill.logoImage}`} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>

                <div className="mid">
                    {skillsData.slice(3, 8).map(skill => (
                        <div className="image-and-name" key={skill.id}>
                            <img src={`https://svgur.com/i/${skill.logoImage}`} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>

                <div className="bottom">
                    {skillsData.slice(8).map(skill => (
                        <div className="image-and-name" key={skill.id}>
                            <img src={`https://svgur.com/i/${skill.logoImage}`} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div >

    );
}

export default About;
