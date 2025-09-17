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
            <li>Início</li>
            <li>Sobre</li>
            <li>Tecnologias</li>
            <li>Projetos</li>
            <li className="is-active">Contato</li>
          </ul>
        </nav>
      </div>
    </HeaderSection>
  )
}

export default Header
