import { ProjectsContainer } from './styles'

const Projects = () => {
  return (
    <ProjectsContainer>
      <div className="container">
        <div className="title">
          <h2>
            Projetos em <span>Destaque</span>
          </h2>
          <p>
            Alguns dos projetos que desenvolvi usando as mais modernas
            tecnologias
          </p>
        </div>
        <div className="container-proj">
          <div className="proj shadow">
            <div className="container-img-proj">
              <img src="https://placehold.co/300x200" alt="placeholder" />
            </div>
            <div className="content">
              <p className="system-name">Sistema de exemplo</p>
              <p className="sys-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                optio, temporibus architecto aut quos amet placeat quaerat qui
                aperiam, ad officiis nostrum quas magnam accusantium accusamus
                non quidem iusto. Illum.
              </p>
              <div className="tech">
                <span>java</span>
                <span>bootstrap</span>
                <span>PostgreSql</span>
              </div>
              <button className="is-active">Ver detalhes</button>
            </div>
          </div>
          <div className="proj shadow">
            <div className="container-img-proj">
              <img src="https://placehold.co/300x200" alt="placeholder" />
            </div>
            <div className="content">
              <p className="system-name">Sistema de exemplo</p>
              <p className="sys-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                optio, temporibus architecto aut quos amet placeat quaerat qui
                aperiam, ad officiis nostrum quas magnam accusantium accusamus
                non quidem iusto. Illum.
              </p>
              <div className="tech">
                <span>java</span>
                <span>bootstrap</span>
                <span>PostgreSql</span>
              </div>
              <button className="is-active">Ver detalhes</button>
            </div>
          </div>
          <div className="proj shadow">
            <div className="container-img-proj">
              <img src="https://placehold.co/300x200" alt="placeholder" />
            </div>
            <div className="content">
              <p className="system-name">Sistema de exemplo</p>
              <p className="sys-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                optio, temporibus architecto aut quos amet placeat quaerat qui
                aperiam, ad officiis nostrum quas magnam accusantium accusamus
                non quidem iusto. Illum.
              </p>
              <div className="tech">
                <span>java</span>
                <span>bootstrap</span>
                <span>PostgreSql</span>
              </div>
              <button className="is-active">Ver detalhes</button>
            </div>
          </div>
        </div>
      </div>
    </ProjectsContainer>
  )
}
export default Projects
