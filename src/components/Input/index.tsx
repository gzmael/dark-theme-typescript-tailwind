/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container, InputGroup } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }: InputProps) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <label htmlFor={fieldName} className={error && 'error'}>
        {label}
      </label>
      <InputGroup>
        <input
          id={fieldName}
          ref={inputRef}
          name={name}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && <span className="error">{error}</span>}
      </InputGroup>
    </Container>
  );
};

export default Input;
