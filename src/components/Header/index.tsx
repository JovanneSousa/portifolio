import { useEffect, useState } from 'react'
import { HeaderSection } from './styles'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderSection scrolled={scrolled} open={isOpen}>
      <div className="container">
        <h1>{'<Jovanne Dev/>'}</h1>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul>
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#inicio">
                Início
              </a>
            </li>
            
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#tecnologia">
                Tecnologias
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#projeto">
                Projetos
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#cursos">
                Formação
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#experiencias">
                Experiências
              </a>
            </li>
            <li className="is-active">
              <a
                onClick={() => setIsOpen(!isOpen)}
                href="#contato"
                className="white"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderSection>
  )
}

export default Header
