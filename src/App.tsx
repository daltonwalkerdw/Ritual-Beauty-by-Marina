import './App.css'
import AboutMe from './components/about/AboutMe'
import Gallery from './components/gallery/Gallery'
import Nav from './components/nav/Nav'
import BookingForm from './components/bookingForm/BookingForm'
import ServicesSection from './components/service/Service'
import HeroImage from './components/hero/Hero'

function App() {
  return (
    <div>
      <Nav />
      <HeroImage />
      <AboutMe />
      <ServicesSection />
      <Gallery />
      <BookingForm />
    </div>
  )
}

export default App
