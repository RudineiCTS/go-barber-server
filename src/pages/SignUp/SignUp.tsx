import React, {useCallback} from 'react';
import * as Yup from 'yup';
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import {Form} from '@unform/web';

import {Background, Container,Content} from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const SignUp: React.FC =()=>{

  const handleSubmit = useCallback(async(data: object) =>{
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string().required('Email Obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'no mínimo 6 dígitos')
      });
      await schema.validate(data, { abortEarly: false})
      await console.log(data);
    } catch (err) {
      console.log(err)
    }
  },[])

  return (
    <Container>
      <Background/>
      <Content>
        <img src={logo} alt="GO BARBER" />

        <Form  onSubmit={handleSubmit}>
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
