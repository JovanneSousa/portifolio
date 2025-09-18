import { useEffect, useState } from 'react'
import { HeaderSection } from './styles'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0) // atualiza o estado com true/false
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderSection scrolled={scrolled}>
      <div className="container">
        <h1>Portifólio</h1>
        <nav>
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre"> Sobre</a>
            </li>
            <li>
              <a href="#tecnologia">Tecnologias</a>
            </li>
            <li>
              <a href="#projeto">Projeto</a>
            </li>
            <li className="is-active">
              <a href="#contato" className='white'>Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderSection>
  )
}

export default Header
