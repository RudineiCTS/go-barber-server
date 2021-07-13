import React from 'react';
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import {Form} from '@unform/web';

import {Background, Container,Content} from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const SignUp: React.FC =()=>{

  function handleSubmit(data:any):void{
    console.log(data);
  }

  return (
    <Container>
      <Background/>
      <Content>
        <img src={logo} alt="GO BARBER" />

        <Form  onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="nome"
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
