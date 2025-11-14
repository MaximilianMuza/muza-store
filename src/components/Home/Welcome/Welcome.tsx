import "./Welcome.css"

export default function Welcome() {
  return (
    <div className="section horizontal-flex gap-30">
      <div className="box vertical-flex">
        <h1>Muza-Store</h1>
        <p className="intro">Ladengeschäft für Inneneinrichtung und Dekoration im Industrie und Bauhaus Stil.</p>
      </div>
      <img className="welcome-image" src={require('../../../assets/images/e450988c-8899-40bd-a92f-1dd09314eece.JPG')}></img>
    </div>

  );
}
