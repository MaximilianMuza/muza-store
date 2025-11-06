import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from "./components/PageLayout"
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import "./App.css"

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
