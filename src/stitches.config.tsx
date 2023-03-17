import { createStitches } from '@stitches/react';

export const COLORS = {
  GRAY0: '#868E96',
  GRAY1: '#000',
  GRAY2: '#343A40',
  GRAY3: '#3f464d',
  GRAY4: '#797e8a',
  ACTIVE: '#01af0c',
  PLAYING: '#64c06a',
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: COLORS,
  },
});

export const setGlobalCss = globalCss({
  '@import': [
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css',
  ],
  ':root': {
    fontSize: '6px',
    '--toastify-font-family': 'Pretendard',
  },
  body: {
    fontSize: '3rem',
    fontFamily: 'Pretendard',
    margin: '0px',
    overflow: 'hidden',
    background: '$GRAY3',
  },
  button: {
    fontFamily: 'Pretendard',
  },
  '*': {
    wordBreak: 'keep-all',
    userSelect: 'none',
    boxSizing: 'border-box',
  },
  '#root': {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    background: '$GRAY1',
  },
  img: {
    '-webkit-user-drag': 'none',
  },
  svg: {
    transition: 'all .4s ease',
  },
  pre: {
    margin: 0,
    fontFamily: 'Pretendard',
  },
});