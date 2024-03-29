import React, { useCallback, useRef } from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import {Background,Container,Content} from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const SignIn: React.FC =()=>{
const formRef= useRef<FormHandles>(null);
  const handleSubmit = useCallback(async(data: object) =>{
    try {
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        email: Yup.string().required('Email Obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória')
      });
      await schema.validate(data, { abortEarly: false})
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  },[])

  return (
    <Container>
      <Content>
        <img src={logo} alt="GO BARBER" />

        <Form ref={formRef} onSubmit={handleSubmit}  >
          <h1>Faça seu logon</h1>

          <Input name="email"
          type="text"
          placeholder="E-mail"
          icon={FiMail}/>
          <Input name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock} />

          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="forgot">
          <FiLogIn/>
          Criar conta
        </a>
      </Content>
      <Background/>
    </Container>
  )
}