import Welcome from "../components/Home/Welcome/Welcome"
import What from "../components/Home/What"
import Highlights from "../components/Highlights/Highlights"
import Where from "../components/Home/Where/Where"

export default function Home() {
  return (
    <div className="page">
      <Welcome />
      <What />
      <Highlights />
      <Where />
    </div>
  )
}
