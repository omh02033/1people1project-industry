import { styled } from '@/stitches.config';
import { Hexile } from '../flexile';

export const Wrapper = styled(Hexile, {
  width: '10rem',
  height: '10rem',
  borderRadius: '5rem',
  cursor: 'pointer',
  variants: {
    active: {
      true: {
        background: '$ACTIVE',
      },
      false: {
        background: '$GRAY3',
      },
    },
    playing: {
      noActive: {
        background: '$GRAY0 !important',
      },
      active: {
        background: '$PLAYING !important',
      },
      not: {},
    },
  },
});
