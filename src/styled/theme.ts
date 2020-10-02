const color = {
  white: 'white',
  black: 'black',
  lightBlack: 'rgba(0, 0, 0, 0.7)',
  transparentBlack: 'rgba(255, 255, 255, 0.8)',
  purple: '#625261',
  darkPurple: '#3d2d3c',
  gray: 'rgba(0, 0, 0, 0.3)',
  info: 'rgba(0, 0, 0, 0.5)',
  lightGray: '#a6a6a4',
  creamWhite: '#e8e8e8',
  skyBlue: '#89beb3',
  green: '#59ff00',
  orange: 'rgba(255, 98, 0, 0.4)',
  darkOrange: 'rgba(255, 98, 0, 1)',
  darkGrey: '#161616',
};

export const theme = {
  color,
  text: {
    white: 'white',
    black: 'black',
    primary: 'rgb(53,53,55)',
    whiteTransparent: 'rgba(255,255,255,0.45)',
    darkGrey: '#161616',
  },
  ui: {
    error: 'red',
    primary: 'blue',
  },
};

export type Theme = typeof theme;
