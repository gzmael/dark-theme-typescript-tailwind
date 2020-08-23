import React, { useContext, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { IoIosMoon, IoMdSunny } from 'react-icons/io';

import Button from 'src/components/Button';
import Input from 'src/components/Input';
import { ThemeContext } from '../../context/ThemeContext';

import logoColor from '../../assets/images/logo-h-color.svg';
import logoWhite from '../../assets/images/logo-h-white.svg';

import { Container, Box, ButtonTheme } from './styles';

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    console.log(data);
  };

  return (
    <Container>
      <img
        src={theme === 'dark' ? logoWhite : logoColor}
        alt="Logo Baita Soluções"
      />
      <Box>
        <div className={theme === 'dark' ? 'dark' : ''} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Faça o login</h2>
          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Informe seu E-mail"
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="Informe sua Senha"
          />
          <Button>Entrar</Button>
        </Form>
      </Box>
      <ButtonTheme type="button" onClick={toggleTheme}>
        {theme === 'dark' ? <IoMdSunny size={24} /> : <IoIosMoon size={24} />}
      </ButtonTheme>
    </Container>
  );
};

export default SingIn;
