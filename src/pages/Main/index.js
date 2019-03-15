import React, { Component } from "react";

// api axios
import api from "../../services/api";

import logo from "../../assets/images/logo.png";

import { Container, Form } from "./styles";

// Components
import Cards from "../../components/Cards";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();
    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);
      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, response.data]
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </Form>

        <Cards repositories={this.state.repositories} />
      </Container>
    );
  }
}
