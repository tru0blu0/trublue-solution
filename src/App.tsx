import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light text-text-dark">
      <Nav />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
