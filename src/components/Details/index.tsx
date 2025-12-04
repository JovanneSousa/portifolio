import type React from 'react'
import { DetailsContainer } from './styles'
import { projetos, type Project } from '../../Data/StacksData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faXmark,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'

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
            <div className="container-img-proj">
              <img src={projeto.imgMobile[0]} alt="imagem do projeto" />
            </div>
            <div className="content-modal">
              <div>
                <div className="flex">
                  <p>{projeto.title}</p>
                  <FontAwesomeIcon
                    className="close"
                    onClick={onClose}
                    icon={faXmark}
                  />
                </div>
                <p className="desc-modal">{projeto.desc}</p>
              </div>
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
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    Funcionalidade Teste
                  </li>
                </ul>
              </div>
              <div className="flex">
                <a
                  target="blank"
                  className="is-active shadow details"
                  href={projeto.code}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github w-5 h-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Ver Código
                </a>
                <a
                  target="blank"
                  className="btn shadow details"
                  href={projeto.link}
                >
                  {' '}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Ver Demo
                </a>
              </div>
            </div>
          </>
        ) : null}
      </DetailsContainer>
    </div>
  )
}

export default Details
