import React, { useState, useEffect } from "react";
import CardSkill from '../components/CardSkill';
import frontendSkills from '../json/FrontendSkills.json';
import backendSkills from '../json/BackendSkills.json';
import tools from '../json/Tools.json';

function About({ language }) {
    const [selectedOption, setSelectedOption] = useState('Frontend');

    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true)
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="aboutme-page">

            <section className="right-section">

                <section className="aboutme-text">
                    {language === 'en' ? (
                        <h2>¡Welcome to my portfolio!</h2>
                    ) : (
                        <h2>¡Bienvenidos a mi portfolio!</h2>
                    )}
                    {language === 'en' ? (
                        <p>

                            I am Joan,
                            <span className="highlighted-word"> web developer </span>
                            passionate about creating digital experiences
                            for users. Since 2023,
                            I have dedicated myself to web development,
                            excelling as a
                            <span className="highlighted-word"> full-stack</span>.
                            <br />
                            <br />
                            My work focuses on bringing user interfaces to life
                            using
                            <span className="highlighted-word"> JavaScript, HTML </span>
                            and
                            <span className="highlighted-word"> CSS </span>
                            , creating
                            <span className="highlighted-word"> interactive </span>and
                            <span className="highlighted-word"> dynamic experiences </span>
                            that captivate users. Additionally, I master
                            <span className="highlighted-word"> React</span>,
                            leveraging its power to build
                            <span className="highlighted-word"> intuitive </span>
                            and
                            <span className="highlighted-word"> robust interfaces </span>
                            that make the user experience exceptional.
                            <br />
                            <br />
                            In the backend realm,
                            <span className="highlighted-word"> Node </span>
                            is my primary tool for building
                            <span className="highlighted-word"> efficient </span>and
                            <span className="highlighted-word"> scalable servers </span>
                            that handle client requests
                            in an
                            <span className="highlighted-word"> agile </span>
                            and
                            <span className="highlighted-word"> effective manner </span>.
                            Additionally, I have experience with complementary tools and technologies
                            such as
                            <span className="highlighted-word"> MongoDB </span>
                            for databases, as well as
                            <span className="highlighted-word"> Git </span>
                            for version control and
                            <span className="highlighted-word"> GitHub </span>
                            for project collaboration.
                            <br />
                            <br />
                            I constantly seek new ways to improve my skills and
                            explore new technologies to stay up to date in this ever-evolving world.
                            I am excited to share my work
                            with you and contribute to the
                            <span className="highlighted-word"> success of your projects</span>.
                            <br />
                            <br />
                            Thank you for visiting my portfolio and
                            <span className="highlighted-word"> Happy Code</span>!
                        </p>
                    ) : (
                        <p>
                            Soy Joan,
                            <span className="highlighted-word"> desarrollador web </span>
                            apasionado por la creación de experiencias
                            digitales para el usuario. Desde el año 2023,
                            me he dedicado al desarrollo de aplicaciones web,
                            destacando como
                            <span className="highlighted-word"> full-stack</span>.
                            <br />
                            <br />
                            Mi trabajo se centra en dar vida a las interfaces de usuario
                            mediante
                            <span className="highlighted-word"> JavaScript, HTML </span>
                            y
                            <span className="highlighted-word"> CSS</span>
                            , creando
                            <span className="highlighted-word"> experiencias interactivas </span>y
                            <span className="highlighted-word"> dinámicas </span>
                            que cautivan a los usuarios. Además, domino
                            <span className="highlighted-word"> React</span>,
                            aprovechando su potencia para construir
                            <span className="highlighted-word"> interfaces intuitivas </span>
                            y
                            <span className="highlighted-word"> robustas </span>
                            que hacen que la experiencia del usuario sea excepcional.
                            <br />
                            <br />
                            En el ámbito del backend,
                            <span className="highlighted-word"> Node </span>
                            es mi herramienta principal para construir
                            <span className="highlighted-word"> servidores eficientes </span>y
                            <span className="highlighted-word"> escalables </span>
                            que gestionan las solicitudes
                            de los clientes de
                            <span className="highlighted-word"> modo ágil </span>
                            y
                            <span className="highlighted-word"> efectivo</span>.
                            Además, cuento con experiencia en herramientas y tecnologías
                            complementarias como
                            <span className="highlighted-word"> MongoDB </span>
                            para bases de datos, así como
                            <span className="highlighted-word"> Git </span>
                            para el control de versiones y
                            <span className="highlighted-word"> GitHub </span>
                            para la colaboración en proyectos.
                            <br />
                            <br />
                            Constantemente busco nuevas formas de mejorar mis habilidades y
                            explorar nuevas tecnologías, para mantenerme al día en este mundo
                            en constante evolución. Estoy emocionado de compartir mi trabajo
                            contigo y de contribuir al
                            <span className="highlighted-word"> éxito de tus proyectos</span>.
                            <br />
                            <br />
                            ¡Gracias por visitar mi portafolio y
                            <span className="highlighted-word"> Happy Code</span>!

                        </p>
                    )}

                    <section className="social-buttons">


                        <div className={`social-link ${showImage ? 'animated-image' : ''}`}>

                            <a class="social-linkedin" target="_blank" href="https://www.linkedin.com/in/joan-benaiges-94bb9460/">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>

                            <a class="social-github" target="_blank" href="https://github.com/JoanBenaiges">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            </a>

                            <a class="social-cv" target="_blank" href="https://drive.google.com/file/d/15eZedM1myxl320ihoY4NOHkOGhpdsrC6/view">
                                <img width="40" height="40" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-curriculum-management-kiranshastry-solid-kiranshastry-5.png" alt="external-curriculum-management-kiranshastry-solid-kiranshastry-5" />
                            </a>

                        </div>

                    </section>

                </section>




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
        </div>
    );
}

export default About;