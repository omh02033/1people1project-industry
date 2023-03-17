import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { pages } from './contants';
import { setGlobalCss } from './stitches.config';

setGlobalCss();

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
