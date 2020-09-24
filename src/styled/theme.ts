const tintColor = '#62d0cf';

const color = {
  white: 'white',
  black: 'black',
  purple: '#625261',
  gray: '#525252',
  lightGray: '#a6a6a4',
  creamWhite: '#e8e8e8',
  skyBlue: '#89beb3',
  green: '#59ff00',
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
