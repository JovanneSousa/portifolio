import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContactSection = styled.section`
  display: flex;
  align-items: center;
  padding: 40px 0;
  background: ${colors.gradientTwo};

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }

  h3 {
    color: ${colors.white};
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 24px;
  }

  p {
    font-size: 1.125rem;
  }
  .text {
    line-height: 1.625rem;
    font-size: 1rem;
    margin-bottom: 32px;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${colors.white};
  }

  .info-rede {
    display: flex;
    margin-top: 16px;
    padding: 16px;
    background: ${colors.gradientTwo};
    border-radius: 8px;
    border: 1px solid ${colors.border};
    transition: all 0.3s ease;

    .title-contact {
      color: ${colors.gray};
    }

    .address {
      color: ${colors.white};
    }

    .address,
    .title-contact {
      line-height: 1rem;
      font-size: 0.975rem;
      padding: 4px;
    }

    &:hover {
      border: 1px solid ${colors.techcyan};
    }
  }

  .icon {
    background: ${colors.gradientOne};
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
  }

  .input {
    margin-bottom: 24px;
  }

  form {
    background: ${colors.gradientTwo};
    border-radius: 16px;
    border: 1px solid ${colors.border};
    padding: 24px;
  }

  input,
  textarea {
    background-color: ${colors.fundo};
    display: block;
    margin-top: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid ${colors.border};
    width: 100%;
    color: ${colors.lightGray};
    font-size: 16px;

    &:focus {
      border-color: ${colors.techcyan};
      outline: none;
    }
  }

  textarea {
    height: 120px;
    resize: none;
  }

  label {
    color: ${colors.white};
  }

  .shadow {
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    }
  }
`
