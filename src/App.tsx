import Contact from './components/Contact'
import Courses from './components/Courses'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tecnology from './components/Tecnology'
import { EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <div className="background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>
      <Header />
      <Hero />
      <Tecnology />
      <Projects />
      <Courses />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
