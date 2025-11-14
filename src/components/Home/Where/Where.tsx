import "./Where.css"

export default function Where() {
  return (
    <div className="section max-text-width">
        <h2>Unser Laden im Hessenstein Turm</h2>
        <p>Unser Laden ist im schönen Hessenstein Turm, nahe Gut Panker und direkt gegenüberliegend dem Forsthaus Hessenstein. 
          Wir sind direkt unten im Turm und freuen uns immer wieder aufs Neue einen so schönen Ort für den Muza-Store nutzen zu können.
          Bei Sonnenschein fällt oft ein sehr schönes Licht hinein, das durch die Fenster gebrochen wird.
        </p>
        <p>Unsere Produktauswahl ändert sich regelmäßig mit neuen Produkte, auch je nach Verfügbarkeit von unseren Vintage Gegenständen.</p>

        <div className="anreise_container">
          <div className="anreise_contents">
            <h3>Anreise</h3>
            <p>24321 Panker</p>
            <p>Hessenstein Aussichtsturm</p>
            <p>Muza-Store</p>
            <h2>Kontakt</h2>
            <p>Mobil: +49 170 7180642</p>
            <p>E-Mail: birgit@muza-store.de</p>
          </div>
          <div className="anreise_map">
            <img className="anreise_image" src={require('../../../assets/images/turm_map.png')}></img>
          </div>
        </div>
    </div>
  );
}
