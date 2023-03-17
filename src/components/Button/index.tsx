import React from 'react';
import { Wrapper } from './style';

export const Button: React.FC<{
  onClick: React.MouseEventHandler<HTMLDivElement>;
  text: string;
}> = ({ onClick, text }) => (
  <Wrapper padding={2} x="center" y="center" onClick={onClick}>
    {text}
  </Wrapper>
);
