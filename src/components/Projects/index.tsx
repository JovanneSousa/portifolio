import { ProjectsContainer } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import { projetos } from '../../Data/StacksData'

const Projects = () => {
  return (
    <ProjectsContainer id="projeto">
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
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 3 }
          }}
          className="carousel"
        >
          <div className="hidden">
            {projetos.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="proj shadow">
                  <div className="container-img-proj">
                    <img src={p.img} alt="placeholder" />
                  </div>
                  <div className="content">
                    <p className="system-name">{p.title}</p>
                    <p className="sys-desc">{p.desc}</p>
                    <div className="tech">
                      {p.tech.map((t) => (
                        <span>{t}</span>
                      ))}
                    </div>
                    <button className="is-active">Ver detalhes</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </ProjectsContainer>
  )
}

export default Projects
