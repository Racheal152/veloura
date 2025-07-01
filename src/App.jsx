import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
import Terms from './Pages/Terms'

function App() {
  return (
    <Router>
      <div className="font-primary overflow-x-hidden">
        <Navbar />

        <Routes>
          {/* ✅ Homepage route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <WorkingStep />
                <Pricing />
                <Testimonial />
                <Contact />
              </>
            }
          />

          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </div>
    </Router>

    /*  <div className='font-primary overflow-x-hidden '>
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
      </div> */
    
  )
}

export default App
