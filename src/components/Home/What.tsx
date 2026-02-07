import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./Home.css"

export default function What() {
  return (
    <div>
      <div className="section">
        <div className="image-carousel-container">
          <div className="image-container intro-box">
            <p className="width-50">Unser Laden ist im schönen Hessenstein Turm, nahe Gut Panker und direkt gegenüberliegend dem Forsthaus Hessenstein. Wir sind direkt unten im Turm und freuen uns immer wieder aufs Neue einen so schönen Ort für den Muza-Store nutzen zu können. Bei Sonnenschein fällt oft ein sehr schönes Licht hinein, das durch die Fenster gebrochen wird.</p>
            <p className="width-50"></p>
          </div>
        </div>
      </div>
      <div className="section">
        <ImageCarousel />
      </div>
    </div>
  );
}
