import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import { HomePage, AboutPage, WorkPage, ContactPage } from './pages';
import './index.css';

export default function App() {
  return (
    <Router>
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