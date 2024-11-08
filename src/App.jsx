import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage, AboutPage, WorkPage, ContactPage } from './pages';
import './index.css';
import SideMenu from './components/SideMenu';

export default function App() {
  
  return (
    <Router>
      <NavLink
        to="/"
        className="fixed top-5 left-5 text-white text-3xl font-custom font-bold tracking-wide shadow-md z-20">
          JB Studios
      </NavLink>
      <SideMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}