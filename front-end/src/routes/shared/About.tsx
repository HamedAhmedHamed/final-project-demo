import AboutSection from "../../components/sections/AboutSection"
import BenefitsSection from "../../components/sections/BenefitsSection"
import Testimonails from "../../components/sections/Testimonails"

const About = () => {
  return (
    <main>
      <AboutSection callToActionBtn={false} />
      <BenefitsSection />
      <Testimonails />
    </main>
  )
}

export default About