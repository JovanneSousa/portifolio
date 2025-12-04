import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FooterSection = styled.footer`
  background-color: ${colors.fundo};
  display: flex;
  align-items: center;
  padding: 32px 24px;
  color: ${colors.textFooter};

  .container {
    text-align: center;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    text-align: left;
    line-height: 1.625rem;

    h3 {
      background: ${colors.gradientOne};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .copy {
    border-top: 1px solid ${colors.gray};
    padding-top: 24px;
    margin-top: 32px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li {
      padding: 16px;

      a {
        color: ${colors.textFooter};
      }
    }
  }

  .footer-nav {

    &:hover {
        color: ${colors.white};
    }
  }

  
  @media (max-width: ${breakpoints.tablet}) {
  }
`
