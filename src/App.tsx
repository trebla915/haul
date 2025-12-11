import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import WhyChoose from './components/sections/WhyChoose'
import ChooseDumpsterSection from './components/sections/ChooseDumpsterSection'
import MaterialsAllowed from './components/sections/MaterialsAllowed'
import HowItWorks from './components/sections/HowItWorks'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <ChooseDumpsterSection />
        <MaterialsAllowed />
        <HowItWorks />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
