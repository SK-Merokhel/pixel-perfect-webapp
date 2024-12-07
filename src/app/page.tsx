import Hero from "./components/hero"
import Management from "./components/management"
import Navbar from "./components/navbar"
import Extension from "./components/extension"
import Customize from "./components/customize"
import Work from "./components/work"
import Sponsors from "./components/sponsors"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Management />
      <Extension />
      <Customize />
      <Work />
      <Sponsors />
      <Footer />
    </div>
  )
}

