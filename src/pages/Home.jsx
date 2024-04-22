import React, { useEffect, useState } from "react";

function Home({ language }) {

    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTitle(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-page">
            <div className="contentText">

                <h1 className={showTitle ? "show-title" : ""}>
                    {language === 'en' ? (
                        <>
                            Hi, <span className="break-line">I'm Joan.</span>
                        </>
                    ) : (
                        <>
                            ¡Hola! <span className="break-line">aquí Joan.</span>
                        </>
                    )}
                </h1>

                <p className={showTitle ? "show-title" : ""}>
                    {language === 'en' ? (
                        <>
                            Full-Stack web developer
                        </>
                    ) : (
                        <>
                            Desarrollador web full-stack
                        </>
                    )}
                </p>

                <div className="contactLogos">

                    <a className="linkedInLogo" target="_blank" href="https://www.linkedin.com/in/joan-benaiges-94bb9460/"></a>

                    <a className="gitHubLogo" target="_blank" href="https://github.com/JoanBenaiges"></a>

                </div>

            </div>

            <div className="image"></div>

        </div>
    );

}

export default Home;