import React, {useCallback, useRef} from 'react';
import * as Yup from 'yup';
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

import {Background, Container,Content} from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const SignUp: React.FC =()=>{
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async(data: object) =>{
    try {
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string().required('Email Obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'no mínimo 6 dígitos')
      });
      await schema.validate(data, { abortEarly: false})
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  },[])

  return (
    <Container>
      <Background/>
      <Content>
        <img src={logo} alt="GO BARBER" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name"
          type="text"
          placeholder="Nome"
          icon={FiUser}/>
          <Input name="email"
          type="text"
          placeholder="E-mail"
          icon={FiMail}/>
          <Input name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock} />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="forgot">
          <FiArrowLeft/>
          Voltar
        </a>
      </Content>
    
  </Container>
  )
}
