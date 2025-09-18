import Card from '../Card'
import { TecnologySection } from './styles'

const Tecnology = () => {
  return (
    <TecnologySection id='tecnologia' className="tech">
      <div className="container">
        <div className="title">
          <h2>
            Minhas <span>Tecnologias</span>
          </h2>
          <p>
            Ferramentas e linguagens que domino para criar soluções completas
          </p>
        </div>
        <div className="card-container">
          <Card type='Frontend'/>
          <Card type='Backend'/>
          <Card type='Database & Tools'/>
        </div>
      </div>
    </TecnologySection>
  )
}

export default Tecnology
