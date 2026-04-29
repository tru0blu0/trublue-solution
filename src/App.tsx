import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import JacksonIndustries from './components/JacksonIndustries'
import Approach from './components/Approach'
import Booking from './components/Booking'
import AboutSection from './components/AboutSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light text-text-dark">
      <Nav />
      <main>
        <Hero />
        <Services />
        <JacksonIndustries />
        <CaseStudies />
        <Approach />
        <AboutSection />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
