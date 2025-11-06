import Welcome from "../components/Home/Welcome"
import What from "../components/Home/What"
import Highlights from "../components/Home/Highlights"
import Where from "../components/Home/Where"
import Contact from "../components/Home/Contact"

export default function Home() {
  return (
    <div className="page">
      <Welcome />
      <What />
      <Highlights />
      <Where />
      <Contact />
    </div>
  )
}
