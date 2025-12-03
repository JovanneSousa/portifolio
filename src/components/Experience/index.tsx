import { experiencia } from '../../Data/StacksData'
import { ContainerExperience } from './styles'

const Experience = () => {
  return (
    <ContainerExperience id="experiencias">
      <div className="container">
        <div className="title">
          <h2>
            Experiência <span>Profissional</span>
          </h2>
          <p>Minha jornada no mercado de trabalho</p>
        </div>
        <div className="timeline">
          {experiencia.map((e) => (
            <div className="timeline-item" key={e.id}>
              <div className="timeline-card shadow">
                <div className="flex">
                  <div>
                    <p className="cargo">{e.titulo}</p>
                    <p className="empresa">{e.empresa}</p>
                  </div>
                  <span className="periodo">
                    {e.inicio} - {e.fim}
                  </span>
                </div>
                <p className="desc">{e.descricao}</p>
                <div className="tech">
                  {e.ferramentas.map((f) => (
                    <span>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerExperience>
  )
}

export default Experience
