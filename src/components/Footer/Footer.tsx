import { Link } from 'react-router-dom';
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="vertical-flex">
        <Link to="/" reloadDocument >Home</Link>
        <Link to="/impressum" reloadDocument>Impressum</Link>
        <Link to="/datenschutz" reloadDocument>Datenschutzerklärung</Link>
      </div>
    </footer>
  );
}
