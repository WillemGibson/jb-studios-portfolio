// Libraries
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Components
import SideBar from './components/SideBar';

// Pages
import { Home, About, Work, Contact } from './pages';

const App = () => {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App