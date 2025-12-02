import { CourseContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBookOpen,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../styles'

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
              <p className="title-course">Bacharelado em Ciência da Computação</p>
              <p className="info-course">UNIC - Universidade de Cuiabá</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cupiditate sit voluptate alias iste quia modi, inventore saepe atque voluptatem fugiat animi sint nulla.</p>
              <div className="flex">
                <p className="conclude">conclusão 06/2027</p>
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
            <div className="card shadow">
              <p className="title-course">Formação ASP.NET Core Expert</p>
              <p className="info-course">Desenvolvedor.io &bull; 88h</p>
              <div className="tech">
                <span>ASP.NET Core</span>
                <span>ASP.NET Mvc</span>
                <span>Razor</span>
              </div>
              <div className="flex">
                <p className="conclude">conclusão 2025</p>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Verificar
                </a>
              </div>
            </div>
            <div className="card shadow">
              <p className="title-course">Formação .NET Developer</p>
              <p className="info-course">DIO &bull; 93h</p>
              <div className="tech">
                <span>C#</span>
                <span>.NET</span>
                <span>Azure</span>
              </div>
              <div className="flex">
                <p className="conclude">conclusão 2025</p>
                <a href="https://hermes.dio.me/certificates/KRRAMPYP.pdf">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Verificar
                </a>
              </div>
            </div>
            <div className="card shadow">
              <p className="title-course">Desenvolvedor Fullstack JAVA</p>
              <p className="info-course">EBAC &bull; 89h</p>
              <div className="tech">
                <span>React</span>
                <span>Java</span>
                <span>SpringBoot</span>
                <span>Bootstrap</span>
                <span>JQuery</span>
              </div>
              <div className="flex">
                <p className="conclude">conclusão 2025</p>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Verificar
                </a>
              </div>
            </div>
            <div className="card shadow">
              <p className="title-course">Formação Docker Fundamentals</p>
              <p className="info-course">DIO &bull; 15h</p>
              <div className="tech">
                <span>Docker</span>
                <span>.NET</span>
                <span>Azure</span>
                <span>Linux</span>
              </div>
              <div className="flex">
                <p className="conclude">conclusão 2025</p>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Verificar
                </a>
              </div>
            </div>
            <div className="card shadow">
              <p className="title-course">Formação CI/CD com Gitlab</p>
              <p className="info-course">DIO &bull; 13h</p>
              <div className="tech">
                <span>Docker</span>
                <span>GitLab</span>
                <span>CI/CD</span>
              </div>
              <div className="flex">
                <p className="conclude">conclusão 2025</p>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Verificar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CourseContainer>
  )
}
export default Courses
