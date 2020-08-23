/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
