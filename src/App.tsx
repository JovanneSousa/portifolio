import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import { EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
        <Hero />
        <About />
    </>
  )
}

export default App
