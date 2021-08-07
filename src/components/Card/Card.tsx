import React, { FC } from 'react';

export enum CardTheme {
  outlinded = 'outlinded',
  primary = 'primary',
}

interface CardProps {
  width: string;
  height: string;
  theme: CardTheme;
}

const Card: FC<CardProps> = ({ width, height, theme, children }) => {
  const styles = {
    width,
    height,
    border: theme === CardTheme.outlinded ? '1px solid gray' : 'none',
    backgroundColor: theme === CardTheme.primary ? 'lightgray' : '',
  };
  return <div style={styles}>{children}</div>;
};

export default Card;
