import { FC, memo } from 'react';

interface CardProps {
  title?: string;
}

const Card: FC<CardProps> = memo(({ title }) => {
  return <div>{title}</div>;
});

export default Card;
