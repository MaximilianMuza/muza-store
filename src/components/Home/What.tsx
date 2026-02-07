import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./Home.css"

export default function What() {
  return (
    <div>
      <div className="section">
        <div className="image-carousel-container">
          <div className="image-container intro-box">
            <p className="width-60">Moin und willkommen beim Muza Store.
              Bei uns findet Ihr eine Auswahl an schönen, natürlichen Produkten und besonderen Vintage-Unikaten.
              Von wundervollen Industrie-Scherenlampen, über nordischer Leinenbekleidung zu einigen Zimmerpflanzen
              bieten wir dieses Angebot in unserem Ladengeschäft im Hessenstein Turm in der Holsteinischen Schweiz an
               der Ostsee an.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <ImageCarousel />
      </div>
    </div>
  );
}
