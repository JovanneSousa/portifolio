import { Container } from './styles'

const Hero = () => {
  return (
    <Container id="inicio">
      <div className="background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>

      <div className="content">
        <p className="color hi">Olá, eu sou Jovanne</p>
        <h1 className="color dev">Desenvolvedor</h1>
        <p className="dev">Full Stack</p>
        <p className="desc">
          Especializado em criar aplicações web modernas e escaláveis com as
          melhores tecnologias do mercado
        </p>
        <div className="buttonContainer">
          <a href="#projeto" className="is-active shadow">
            Ver Projetos
          </a>
          <a href="#contato" className="btn shadow">
            Entrar em Contato
          </a>
        </div>
      </div>
      <div className="img">
        <img src="./me-.png" alt='uma foto minha'/>
      </div>
    </Container>
  )
}

export default Hero
