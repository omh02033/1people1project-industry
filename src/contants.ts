import { FunctionComponent } from 'react';
import { Main } from './pages';

export enum ROUTES {
  ROOT = '/',
}

export const pages: Record<ROUTES, FunctionComponent> = {
  [ROUTES.ROOT]: Main,
};

import { HiHat } from './assets';

export const Sounds: Array<{
  label: string;
  mp3: string;
}> = [
  {
    label: 'HiHat',
    mp3: HiHat,
  },
];
