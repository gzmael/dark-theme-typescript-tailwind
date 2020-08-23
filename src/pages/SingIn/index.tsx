import React, { useContext, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { IoIosMoon, IoMdSunny, IoMdLock, IoIosMail } from 'react-icons/io';
import { GoSignIn } from 'react-icons/go';

import Button from 'src/components/Button';
import InputIcon from 'src/components/InputIcon';
import { ThemeContext } from '../../context/ThemeContext';

import logoColor from '../../assets/images/logo-h-color.svg';
import logoWhite from '../../assets/images/logo-h-white.svg';

import { Container, Box, ButtonTheme } from './styles';

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    try {
      // Remove all previous errors
      if (formRef && formRef.current) {
        formRef.current.setErrors({});
      }
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Informe um E-mail válido')
          .required('É preciso informar o E-mail'),
        password: Yup.string().required('É preciso informar a Senha'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors: Record<string, string> = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error: Yup.ValidationError) => {
          validationErrors[error.path] = error.message;
        });
        if (formRef && formRef.current) {
          formRef.current.setErrors(validationErrors);
          console.log(formRef.current.getErrors());
        }
      }
    }
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
          <InputIcon
            type="email"
            name="email"
            label="E-mail"
            placeholder="Informe seu E-mail"
          >
            <IoIosMail size={20} />
          </InputIcon>
          <InputIcon
            type="password"
            name="password"
            label="Senha"
            placeholder="Informe sua Senha"
            visiblePass
          >
            <IoMdLock size={20} />
          </InputIcon>
          <Button type="submit">
            <GoSignIn size={20} />
            Entrar
          </Button>
          <a href="forgot">Esqueci minha Senha</a>
        </Form>
      </Box>
      <ButtonTheme type="button" onClick={toggleTheme}>
        {theme === 'dark' ? <IoMdSunny size={24} /> : <IoIosMoon size={24} />}
      </ButtonTheme>

      <footer>&copy; 2020 - Baita Soluções</footer>
    </Container>
  );
};

export default SingIn;
