import HomeHero from "../components/hero/HomeHero"
import MenuInfoSection from "../components/sections/MenuInfoSection"
import AboutSection from "../components/sections/AboutSection"
import Testimonails from "../components/sections/Testimonails"

const Home = () => {
  return (
    <main>
      <HomeHero />
      <MenuInfoSection />
      <AboutSection />
      <Testimonails />
    </main>
  )
}

export default Home