import React from 'react';
import { ButtonStyled } from './style';

interface ButtonProps {
  primary: boolean;
  backgroundColor: string;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: () => void;
}

const Button: React.ElementType = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <ButtonStyled
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </ButtonStyled>
  );
};

export default Button;
