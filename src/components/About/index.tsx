import { AboutSection } from './styles'

const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <h2>
          Sobre <span>Mim</span>
        </h2>
        <p>Desenvolvedor apaixonado por tecnologia e inovação</p>

        <div className="about-section">
          <article className="description">
            <p>
              Sou um desenvolvedor fullstack com experiência sólida em <span className="java">Java</span> para
              backend e <span className="react">React</span> para frontend. Tenho paixão por criar aplicações
              robustas, escaláveis e com excelente experiência do usuário.
            </p>
            <p>
              Minha jornada na programação começou com curiosidade sobre como as
              coisas funcionam por trás das interfaces. Hoje, combino design
              intuitivo com arquiteturas sólidas para entregar soluções
              completas.
            </p>

            <div className="stacks">
              <div className="stack shadow">
                <h4 className='front'>Frontend</h4>
                <p>React, TypeScript, SASS</p>
              </div>
              <div className="stack shadow">
                <h4 className='back'>Backend</h4>
                <p>Java, Spring Boot, APIs REST</p>
              </div>
            </div>
          </article>

          <aside className="imageSection">
            <div className="image">
              <p>DEV</p>
            </div>
            <h3>Desenvolvedor Fullstack</h3>
            <ul>
              <li>Java</li>
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </aside>
        </div>
      </div>
    </AboutSection>
  )
}

export default About
