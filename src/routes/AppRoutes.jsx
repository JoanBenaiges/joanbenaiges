import { Routes, Route } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<About />} />
            <Route path={'/projects'} element={<Projects />} />
            <Route path={'/contact-me'} element={<Contact />} />
        </Routes>
    )
}

export default AppRoutes