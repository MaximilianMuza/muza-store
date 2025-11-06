import { Link } from 'react-router-dom';
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="vertical-flex">
        <Link to="/">Home</Link>
        <Link to="/impressum">Impressum</Link>
      </div>
    </footer>
  );
}
