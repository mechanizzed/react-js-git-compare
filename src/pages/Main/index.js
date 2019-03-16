import React, { Component } from "react";

// api axios
import api from "../../services/api";

import logo from "../../assets/images/logo.png";

import { Container, Form, ErrorMessage } from "./styles";

// Components
import Cards from "../../components/Cards";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: [],
    msgEmpty: false,
    msgRepositoryError: false
  };

  handleAddRepository = async e => {
    e.preventDefault();
    if (this.state.repositoryInput.length === 0)
      return this.setState({ msgEmpty: true });
    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);
      this.setState({
        repositoryInput: "",
        msgRepositoryError: false,
        repositories: [...this.state.repositories, response.data]
      });
    } catch (error) {
      return this.setState({ msgRepositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            required
            placeholder="user/repository"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </Form>
        {this.state.msgEmpty ? (
          <ErrorMessage>
            <p>Preencha o campo acima</p>
          </ErrorMessage>
        ) : (
          ""
        )}

        {this.state.msgRepositoryError ? (
          <ErrorMessage>
            <p>Repositório não encontrado</p>
          </ErrorMessage>
        ) : (
          ""
        )}

        <Cards repositories={this.state.repositories} />
      </Container>
    );
  }
}
