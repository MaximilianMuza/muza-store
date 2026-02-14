import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from "./components/PageLayout"
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Privacy from './pages/Privacy';
import "./App.css"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Privacy />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
