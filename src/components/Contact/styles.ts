import styled from 'styled-components'
import { colors } from '../../styles'

export const ContactSection = styled.section`
  display: flex;
  align-items: center;
  height: 90vh;

  h2 {
    color: ${colors.black};
    margin-bottom: 16px;
    font-size: 2.25rem;

    span {
      background: ${colors.gradientOne};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .content {
    display: flex;
    gap: 3rem;
  }

  .title {
    text-align: center;
    margin-bottom: 64px;
  }

  .info {
    max-width: 50%;
  }

  h3 {
    color: ${colors.black};
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

    .title-contact {
      color: ${colors.black};
    }

    .address,
    .title-contact {
      line-height: 1rem;
      font-size: 0.975rem;
      padding: 4px;
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
    background-color: ${colors.white};
    width: 50%;
    border-radius: 16px;
    border: 1px solid ${colors.border};
    padding: 24px;
  }

  input,
  textarea {
    background-color: ${colors.background2};
    display: block;
    margin-top: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid ${colors.border};
    width: 100%;
    color: ${colors.gray};
    &:focus {
      border: 2px solid ${colors.purple};
      outline-color: ${colors.purple};
    }
  }

  textarea {
    height: 120px;
    resize: none;
  }

  label {
    color: ${colors.black};
  }

  button {
    width: 100%;
    border-radius: 8px;
    padding: 16px;
    border: none;
    cursor: pointer;
  }

  .shadow {
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    }
  }
`
