import type React from 'react'
import { DetailsContainer } from './styles'
import { projetos, type Project } from '../../Data/StacksData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faXmark,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'

interface DetailsProps {
  item: number
  onClose: () => void
}

const Details: React.FC<DetailsProps> = ({ item, onClose }) => {
  const projeto: Project | undefined = projetos.find((p) => p.id == item)

  const imagemMaiorQueUm = () => {
    if (projeto && projeto.img.length > 1) return true
    return false
  }

  console.log(projeto)

  return (
    <DetailsContainer>
      {projeto ? (
        <>
          {projeto.imgMobile.length >= 1 && (
            <div className="container-img-proj">
              <img src={projeto.imgMobile[0]} alt="imagem do projeto" />
            </div>
          )}
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
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={imagemMaiorQueUm() ? 2 : 1}
              spaceBetween={imagemMaiorQueUm() ? 20 : 0}
              navigation
              pagination={{ clickable: true }}
              loop
              grabCursor={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                1024: { slidesPerView: imagemMaiorQueUm() ? 2 : 1 }
              }}
              className={`carousel ${imagemMaiorQueUm() ? 'dois' : ''}`}
            >
              {projeto.img.map((f, index) => (
                <SwiperSlide key={index} >
                  <div className="container-img-proj-carousel">
                    <img src={f} alt="imagens do projeto" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
                {projeto.funcionalidade.map((f, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {f}
                  </li>
                ))}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
  )
}

export default Details
