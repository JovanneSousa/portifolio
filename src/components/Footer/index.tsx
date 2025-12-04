import { FooterSection } from './styles'

const currentYear: number = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <div className="title-container">
          <div className="title-footer">
            <h3>{'<Jovanne Dev/>'}</h3>
            <p>Desenvolvedor Fullstack &#9679; .NET &amp; React</p>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#inicio">Início</a>
              </li>

              <li>
                <a href="#tecnologia">Tecnologias</a>
              </li>
              <li>
                <a href="#projeto">Projetos</a>
              </li>
              <li>
                <a href="#cursos">Formação</a>
              </li>
              <li>
                <a href="#experiencias">Experiências</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="copy">
          <p>
            &copy; {currentYear} Jovane Sousa. Desenvolvido com React +
            TypeScript + Styled Components
          </p>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
