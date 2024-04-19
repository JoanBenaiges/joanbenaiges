import { Routes, Route } from 'react-router-dom'
import AboutMe from '../pages/AboutMe'
import ContactMe from '../pages/ContactMe'
import Projects from '../pages/Projects'
import Home from '../pages/Home'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/about-me'} element={<AboutMe />} />
            <Route path={'/projects'} element={<Projects />} />
            <Route path={'/contact-me'} element={<ContactMe />} />
        </Routes>
    )
}

export default AppRoutes