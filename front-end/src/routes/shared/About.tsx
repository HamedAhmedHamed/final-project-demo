import AboutSection from "../../components/sections/home/more-about-us/AboutSection"
import BenefitsSection from "../../components/sections/shared/benefits/BenefitsSection"
import Testimonails from "../../components/sections/shared/testimonials/Testimonials"

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