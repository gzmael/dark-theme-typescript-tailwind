/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes, useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { IoMdCloseCircleOutline, IoIosEye, IoIosEyeOff } from 'react-icons/io';

import { Container, InputGroup } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  visiblePass?: boolean;
}

const InputIcons: React.FC<InputProps> = ({
  name,
  label,
  children,
  type,
  visiblePass,
  ...rest
}: InputProps) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [isView, setIsView] = useState(false);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function handleToggleType() {
    setIsView(prev => !prev);
  }

  return (
    <Container className={error && 'error'}>
      <label htmlFor={fieldName}>{label}</label>
      <InputGroup>
        {children}
        <input
          id={fieldName}
          ref={inputRef}
          name={name}
          defaultValue={defaultValue}
          {...rest}
          type={type === 'password' && isView ? 'text' : type}
        />
        {visiblePass && (
          <button type="button" onClick={handleToggleType}>
            {type === 'password' && isView ? (
              <IoIosEyeOff size={20} />
            ) : (
              <IoIosEye size={20} />
            )}
          </button>
        )}

        {error && <IoMdCloseCircleOutline size={20} />}
      </InputGroup>
      {error && <span className="error">{error}</span>}
    </Container>
  );
};

export default InputIcons;
