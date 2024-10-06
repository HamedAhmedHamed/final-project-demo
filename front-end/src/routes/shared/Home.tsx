import { lazy, Suspense } from "react"
// import Hero from "../../components/hero/home/Hero.tsx"
import SuspensedHero from "../../components/hero/home/SuspensedHero.tsx"
const Hero = lazy(() => import("../../components/hero/home/Hero.tsx"))
import BrowseMenu from "../../components/sections/home/browse-menu/BrowseMenu.tsx"
import AboutSection from "../../components/sections/home/more-about-us/AboutSection.tsx"
import Testimonails from "../../components/sections/shared/testimonials/Testimonials.tsx"

const Home = () => {
  return (
    <main>
      <Suspense fallback={<SuspensedHero />}>
        <Hero />
      </Suspense>

      <BrowseMenu />
      <AboutSection />
      <Testimonails />
    </main>
  )
}

export default Home