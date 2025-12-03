import { CourseContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBookOpen,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../styles'
import { cursos } from '../../Data/StacksData'

const Courses = () => {
  return (
    <CourseContainer id="cursos">
      <div className="container">
        <div className="title">
          <h2>
            Formação & <span>Qualificações</span>
          </h2>
          <p>Educação formal, certificações e aprendizado contínuo</p>
        </div>
        <div className="ens">
          <p className="title-formation">
            <FontAwesomeIcon color={colors.techcyan} icon={faGraduationCap} />{' '}
            Formação Acadêmica
          </p>
          <div className="container-card">
            <div className="card shadow">
              <div className="flex">
                <p className="title-course">
                  Bacharelado em Ciência da Computação
                </p>
              </div>
              <p className="info-course">UNIC - Universidade de Cuiabá</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                cupiditate sit voluptate alias iste quia modi, inventore saepe
                atque voluptatem fugiat animi sint nulla.
              </p>
              <div className="flex">
                <p className="conclude">conclusão prevista: 06/2027</p>
                <div className="tech">
                  <span>Em andamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curso">
          <p className="title-formation">
            <FontAwesomeIcon color={colors.techcyan} icon={faBookOpen} /> Cursos
            Concluídos
          </p>
          <div className="container-card">
            {cursos.map((c) => (
              <div className="card shadow" key={c.id}>
                <p className="title-course">{c.titulo}</p>
                <p className="info-course">
                  {c.plataforma} &bull; {c.horas}h
                </p>
                <div className="tech">
                  {c.tecnologias.map((t) => (
                    <span>{t}</span>
                  ))}
                </div>
                <div className="flex">
                  <p className="conclude">conclusão {c.ano}</p>
                  <a href={c.certificado} target='blank'>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
                    Verificar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CourseContainer>
  )
}
export default Courses
