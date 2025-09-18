import { Container } from "./styles";

const Hero = () => {
    return (
        <Container id="inicio">
            <div>
                <div className="titleContainer">
                <h2 className="title">Desenvolvedor</h2>
                <h2 className="subTitle">Fullstack</h2>
            </div>
            <p>Especialista em <span>Java</span> e <span>React</span>, criando soluções completas e <br /> inovadoras do backend ao frontend.</p>
            <div className="buttonContainer">
                <a href="#projeto" className="is-active shadow">Ver Projetos</a>
                <a href="#contato" className="btn">Entrar em Contato</a>
            </div>
            </div>
        </Container>
    )
}

export default Hero;