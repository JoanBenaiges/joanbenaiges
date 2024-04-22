import React from "react";

function Home({ language }) {

    return (
        <div className="home-page">
            <h1>{language === 'en' ? 'This is the Home Page' : 'Esta es la Página de Inicio'}</h1>
            <p>{language === 'en' ? 'Information about the home page' : 'Información sobre la página de inicio'}</p>
        </div>

    );
}

export default Home;