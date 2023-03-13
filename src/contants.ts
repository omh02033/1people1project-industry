import { FunctionComponent } from 'react';
import { Main } from './pages';

export enum ROUTES {
  ROOT = '/',
};

export const pages: Record<ROUTES, FunctionComponent> = {
  [ROUTES.ROOT]: Main,
};