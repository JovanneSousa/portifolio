import { createGlobalStyle } from 'styled-components'
import { hexToRgb } from './utils'

export const colors = {
  techblue: '#3D8BFD',
  techcyan: '#1ECBE1',
  techgreen: '#199473',
  fundo: '#0D1117',
  gradientTwo: 'linear-gradient(180deg, #1F2533 0%, #141922 100%)',
  gradientOne: `linear-gradient(135deg, #3d8bfd 0%, #1ecbe1 100%)`,
  transparent: `rgba(${hexToRgb('#0D1117')}, 0.8)`,
  purple: '#B95EED',
  lightPurple: '#5649E6',
  white: '#ffffff',
  black: 'rgba(17, 17, 17, 1)',
  gray: '#6A7181',
  green: '#10ac84',
  lightGray: `#a3a3a3`,
  background: `#EAEAF9`,
  background2: `#F6F7F9`,
  border: `#232730`,
  textFooter: `#D3D3D5`
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Space Grotesk, sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    background: ${colors.fundo};
    color: ${colors.gray};

    a {
      color: ${colors.gray};

      &:hover {
        color: ${colors.techcyan};
      }
    }
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
    background: ${colors.gradientTwo};
    padding:8px 16px;
    border-radius: 8px;
    border: 1px solid ${colors.border};
    color: ${colors.gray};
    transition: all ease 0.3s;

    &:hover {
      color: ${colors.white};
      border: 1px solid ${colors.white}; 
    }
  }

    .shadow {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(${hexToRgb(colors.techcyan)}, .5);
      border: 1px solid ${colors.techcyan};
    }
  }
`
