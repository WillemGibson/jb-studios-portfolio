import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MenuToggleButton from './components/buttons/MenuToggleButton';
import SideMenu from './components/SideMenu';
import { HomePage, AboutPage, WorkPage, ContactPage } from './pages';
import './index.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  return (
    <Router>
      <MenuToggleButton 
        onClick={toggleMenu} 
        isOpen={isMenuOpen} 
        className="absolute z-10"
        />
      {isMenuOpen && <SideMenu />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}