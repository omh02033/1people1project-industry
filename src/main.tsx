import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { createStitches } from '@stitches/react';
import { pages } from './contants';

export const COLORS = {
  GRAY0: '#F8F9FA',
  GRAY1: '#F1F3F5',
  GRAY2: '#E9ECEF',
  GRAY3: '#DEE2E6',
  GRAY4: '#CED4DA',
  GRAY5: '#ADB5BD',
  GRAY6: '#868E96',
  GRAY7: '#495057',
  GRAY8: '#343A40',
  GRAY9: '#212529',
  WHITE: '#FFFFFF',
  PINK: '#FF83F3',
  MENUPINK: '#F58EEB',
  BLUE: '#6B8EF9',
  LIGHTBLUE: '#DAE3FF',
  HEADERBLUE: '#537DFF',
  BTNBLUE: '#6288FD',
  MINT: '#48FFED',
  THICKMINT: '#8BF0DF',
  PURPLE: '#9D97F2',
  LIGHTPURPLE: '#D9D7FF',
  VIOLET: '#A339FF',
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


const Router = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      {Object.entries(pages).map(([route, Component]) => (
        <Route key={route} path={route} element={<Component />} />
      ))}
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
