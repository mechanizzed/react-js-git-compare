import React from 'react';

import logo from '../../assets/images/logo.png';

import { Container, Form } from './styles';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />
    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">Adicionar</button>
    </Form>
  </Container>
);

export default Main;
