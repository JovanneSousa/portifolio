import Contact from './components/Contact'
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
      <Header />
      <Hero />
      <Tecnology />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
