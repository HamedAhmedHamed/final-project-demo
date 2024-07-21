import AboutSection from "../components/sections/AboutSection"
import BenefitsSection from "../components/sections/BenefitsSection"

const About = () => {
  return (
    <main>
      <AboutSection callToActionBtn={false} />
      <BenefitsSection />
    </main>
  )
}

export default About