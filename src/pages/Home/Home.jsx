import Hero from "../../components/Hero/Hero"
import AboutSection from "../../components/AboutSection/AboutSection"
import FeaturedDestinationsSection from "../../components/FeaturedDestinationsSection/FeaturedDestinationsSection"
import TestimonialSection from "../../components/TestimonialsSection/TestimonialSection"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedDestinationsSection />
      <TestimonialSection />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
