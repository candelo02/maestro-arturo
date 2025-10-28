
import About from './components/About'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import HeroCarousel from './components/HeroCarousel'
import SEOHead from './components/layout/SEOHead'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { NavigationProvider } from './context/NavigationContext'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white transition-colors">
          <SEOHead />
          <Navbar />
          <HeroCarousel />
          <main className="pt-24">
            <About />
            <Benefits />
            <Services />
          </main>
          <Footer />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  )
}
