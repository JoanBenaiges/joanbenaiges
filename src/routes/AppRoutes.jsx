import { Routes, Route } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import ContactMe from '../pages/ContactMe';
import Projects from '../pages/Projects';
import Home from '../pages/Home';

const AppRoutes = ({ language, toggleLanguage }) => {
    return (
        <Routes>
            <Route
                path={'/'}
                element={<Home language={language} toggleLanguage={toggleLanguage} />}
            />

            <Route
                path={'/about-me'}
                element={<AboutMe language={language} toggleLanguage={toggleLanguage} />}
            />

            <Route
                path={'/projects'}
                element={<Projects language={language} toggleLanguage={toggleLanguage} />}
            />

            <Route
                path={'/contact-me'}
                element={<ContactMe language={language} toggleLanguage={toggleLanguage} />} />
        </Routes>
    );
};

export default AppRoutes;