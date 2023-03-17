import React, { useEffect } from 'react';
import { Wrapper } from './style';

export const Point: React.FC<{
  active: boolean;
  playing: boolean;
  mp3: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}> = ({ active, playing, mp3, onClick }) => {
  const audio = new Audio(mp3);

  useEffect(() => {
    if (playing && active) audio.play();
  }, [playing]);

  return (
    <Wrapper
      active={active}
      playing={playing ? (active ? 'active' : 'noActive') : 'not'}
      onClick={onClick}
    />
  );
};
