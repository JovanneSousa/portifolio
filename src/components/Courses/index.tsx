import { CourseContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Courses = () => {
  return (
    <CourseContainer id='cursos'>
      <div className="container">
        <div className="title">
          <h2>
            Cursos & <span>Certificados</span>
          </h2>
          <p>
            Aprendizado contínuo e certificados que validam meu conhecimento
          </p>
        </div>
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
    </CourseContainer>
  )
}
export default Courses
