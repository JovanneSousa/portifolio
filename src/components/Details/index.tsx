import type React from 'react'
import { DetailsContainer } from './styles'
import { projetos, type Project } from '../../Data/StacksData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

interface DetailsProps {
  item: number
  onClose: () => void
}

const Details: React.FC<DetailsProps> = ({ item, onClose }) => {
  const projeto: Project | undefined = projetos.find((p) => p.id == item)

  return (
    <div className="container">
      <DetailsContainer>
        {projeto ? (
          <>
            <div className="flex">
              <p>{projeto.title}</p>
              <FontAwesomeIcon onClick={onClose} icon={faXmark} />
            </div>
            <p>{projeto.desc}</p>

            <div className="stack">
              <p className="details-title">Tecnologias Utilizadas</p>
              <div className="tech">
                {projeto.tech.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>
            </div>
            <div className="freatures">
              <div className="details-title">Principais Funcionalidades</div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Funcionalidade Teste
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Funcionalidade Teste
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Funcionalidade Teste
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Funcionalidade Teste
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  Funcionalidade Teste
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </DetailsContainer>
    </div>
  )
}

export default Details
