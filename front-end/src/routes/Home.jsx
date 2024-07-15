import HomeHero from "../components/hero/HomeHero"
import MenuInfoSection from "../components/sections/MenuInfoSection"
import About from "../components/sections/About"

const Home = () => {
  return (
    <main>
      <HomeHero />
      <MenuInfoSection />
      <About />
    </main>
  )
}

export default Home