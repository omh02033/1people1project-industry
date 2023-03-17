import { Hexile, Vexile } from '@/components';
import { styled } from '@/stitches.config';

export const Container = styled(Vexile, {
  overflow: 'hidden',
});
export const KitTextWrapper = styled(Vexile, {
  height: '15rem',
});
export const KitText = styled('span', {
  fontSize: '5rem',
  fontWeight: 800,
  color: '#fff',
});
export const PointContainer = styled(Vexile, {
  overflowX: 'auto',
  width: '85%',
});
export const PointWrapper = styled(Hexile, {
  height: '15rem',
  overflowX: 'auto',
  width: 'fit-content',
});

export const Line = styled(Hexile, {
  background: '$GRAY4',
  width: '2px',
});
