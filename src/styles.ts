import { createGlobalStyle } from 'styled-components'

export const colors = {
  gradientOne: `linear-gradient(45deg, #5649E6, #B95EED)`,
  transparentWhite: "rgba(255, 255, 255, 0.8)",
  purple: '#B95EED',
  lightPurple: '#5649E6',
  white: '#eeeeee',
  black: 'rgba(17, 17, 17, 1)',
  gray: '#6A7181',
  green: '#10ac84',
  lightGray: `#a3a3a3`,
  background: `#EAEAF9`
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: roboto, sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.gray};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media ( max-width: ${breakpoints.desktop} ){
      max-width: 85%;
    }
  }

  .is-active {
    background: ${colors.gradientOne};
    color: ${colors.white};
  }

  .btn {
    background-color: ${colors.white};
    padding:8px 16px;
    border-radius: 8px;
    border: 1px solid ${colors.gray};
    color: ${colors.gray};

    &:hover {
      color: ${colors.white};
      background-color: ${colors.lightPurple};
    }
  }
`
