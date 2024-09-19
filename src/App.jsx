import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import { HomePage, AboutPage, WorkPage, ContactPage } from './pages';
import './index.css';

const App = () => {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App