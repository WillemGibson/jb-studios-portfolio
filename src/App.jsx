import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage, AboutPage, WorkPage, ContactPage, ErrorPage } from './pages';
import SideMenu from './components/SideMenu';
import Wordmark from './components/Wordmark';
import './index.css';

export default function App() {
  
  return (
    <Router>
      <NavLink
        to="/"
        className="fixed top-5 left-5 text-white text-3xl font-custom font-bold tracking-wide z-20">
          JBD Studios
      </NavLink>
      <SideMenu />
      <Wordmark />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}