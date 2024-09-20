import HomeHero from "../components/hero/HomeHero.tsx"
import MenuInfoSection from "../components/sections/MenuInfoSection.tsx"
import AboutSection from "../components/sections/AboutSection.tsx"
import Testimonails from "../components/sections/Testimonails.tsx"

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