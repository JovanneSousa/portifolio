import { ContainerExperience } from './styles'

const Experience = () => {
  return (
    <ContainerExperience>
      <div className="title">
        <h2>
          Experiência <span>Profissional</span>
        </h2>
        <p>Minha jornada no mercado de trabalho</p>
      </div>
      <div className="timeline container">
        <div className="timeline-item">
          <div className="timeline-card shadow">
            <div className="flex">
              <div>
                <p className='cargo'>Estágio em Desenvolvimento</p>
                <p className='empresa'>Redeflex</p>
              </div>
              <span className='periodo'>outubro de 2025</span>
            </div>
            <p className='desc'>Descrição</p>
            <div className='tech'>
              <span>Teste</span>
              <span>Teste</span>
              <span>Teste</span>
            </div>
          </div>
        </div>
      </div>
    </ContainerExperience>
  )
}

export default Experience
