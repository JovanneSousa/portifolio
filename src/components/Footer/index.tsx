import { FooterSection } from './styles'

const currentYear: number = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <div className="title-container">
          <div className="title-footer">
            <h3>Portifolio</h3>
            <p>Desenvolvedor Fullstack &#9679; Java &amp; React</p>
          </div>
          <nav>
            <ul>
              <li>
                <a className='footer-nav' href="#inicio">Início</a>
              </li>
              <li>
                <a className='footer-nav' href="#sobre"> Sobre</a>
              </li>
              <li>
                <a className='footer-nav' href="#tecnologia">Tecnologias</a>
              </li>
              <li>
                <a className='footer-nav' href="#projeto">Projeto</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="copy">
          <p>
            &copy; {currentYear} Jovane Sousa. Desenvolvido com React + TypeScript
            + Styled Components
          </p>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
