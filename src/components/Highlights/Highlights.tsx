import ImageBox from "../ImageBox/ImageBox";
import "./Highlights.css";

export default function Highlights() {
  return (
    <div className="section">
      <div className="container">
        <h2>Eindrücke</h2>
        <p>Hier einige Eindrücke aus unserem Laden..</p>
        <div className="highlights-wrapper">
          <ImageBox />
        </div>
      </div>
    </div>
  );
}
