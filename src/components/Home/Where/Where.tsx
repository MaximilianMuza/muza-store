import "./Where.css"

export default function Where() {
  return (
    <div className="section where_section">
        <h2>Unser Laden im Hessenstein Turm</h2>
        <p>Unser Laden ist im schönen Hessenstein Turm, nahe Gut Panker und direkt gegenüberliegend dem Forsthaus Hessenstein
          - wo man auch sehr lecker essen gehen kann! 
          Wir sind im Untergeschoss des Turms und freuen uns immer wieder aufs Neue an einem so schönen Ort unseren Muza-Store zu haben.
          Bei Sonnenschein fällt oft ein sehr schönes Licht hinein, das durch die Fenster gebrochen wird.</p>
        <p>Unsere Produktauswahl ändert sich regelmäßig mit neuen Produkten, je nachdem was wir gerade für schöne Unikate finden. 
          Dafür sind wir für euch auf Vintage-Flohmärkten in Deutschland bis nach Frankreich unterwegs.</p>
        <div className="anreise_container">
          <div className="anreise_contents">
            <h3>Anreise</h3>
            <p>24321 Panker</p>
            <p>Hessenstein Aussichtsturm</p>
            <p>Muza-Store</p>
            <br />
            <h3>Kontakt</h3>
            <p>Birgit Regier-Muza</p>
            <p>Mobil: <a href="tel:+491707180642">+49 170 7180642</a></p>
            <p>E-Mail: <a href="mailto:birgit@muza-store.de">birgit@muza-store.de</a></p>
          </div>
          <div className="anreise_map">
            <img className="anreise_image" src={require('../../../assets/images/turm_map.png')}></img>
          </div>
        </div>
    </div>
  );
}
