import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import WorkingStep from './components/WorkingStep'
import FAQs from './Pages/FAQs'

function App() {
  return (
      <div className='font-primary overflow-x-hidden '>
        <Navbar/>
        <Hero />
        <Services />
        <About />
        <WorkingStep />
        <Pricing />
        <Testimonial />
        <Contact />
        <Footer />
        <FAQs/>
      </div>
    
  )
}

export default App
