import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Tecnology from './components/Tecnology'
import { EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
        <Hero />
        <About />
        <Tecnology />
        <Contact />
        <Footer />
    </>
  )
}

export default App
