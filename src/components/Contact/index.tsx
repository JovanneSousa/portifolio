import { useState } from 'react'
import { ContactSection } from './styles'

const Contact = () => {
  const [texto, setTexto ] = useState("Descreva como eu posso te ajudar...")
  return (
    <ContactSection id='contato'>
      <div className="container">
        <div className="title">
          <h2>
            Entre em <span>Contato</span>
          </h2>
          <p>Vamos conversar sobre seu próximo projeto</p>
        </div>
        <div className="content">
          <div className="info">
            <h3>Vamos trabalhar juntos!</h3>
            <p className="text">
              {' '}
              Estou sempre aberto a discutir novas oportunidades, projetos
              interessantes ou simplesmente trocar ideias sobre tecnologia.
              Entre em contato!
            </p>
            <div className="info-rede">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="info-contact">
                <p className="title-contact">Email</p>
                <p className="address">jovanemaciel943@gmail.com</p>
              </div>
            </div>
            <div className="info-rede">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="info-contact">
                <p className="title-contact">Telefone</p>
                <p className="address">+55 (65) 99238-4824</p>
              </div>
            </div>
            <div className="info-rede">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="info-contact">
                <p className="title-contact">Localização</p>
                <p className="address">Cuiabá, Mato Grosso</p>
              </div>
            </div>
          </div>
          <form action="submit">
            <div className="input">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu nome completo" />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="seu@email.com" />
            </div>
            <div className="input">
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => setTexto(e.target.value)}
                value={texto}
              />
            </div>
            <button className="is-active" type="button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </ContactSection>
  )
}

export default Contact
