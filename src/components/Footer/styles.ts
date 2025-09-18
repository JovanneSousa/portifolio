import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterSection = styled.footer`
  background-color: ${colors.footer};
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
  }

  .copy {
    border-top: 1px solid ${colors.gray};
    padding-top: 24px;
    margin-top: 32px;
  }

  ul {
    display: flex;

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
`
