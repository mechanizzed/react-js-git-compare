import React, { Component } from "react";

// api axios
import api from "../../services/api";

//Moment
import moment from "moment";

import logo from "../../assets/images/logo.png";

import Loader from "react-loader-spinner";

import { Container, Form, ErrorMessage } from "./styles";

// Components
import Cards from "../../components/Cards";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: [],
    msgEmpty: false,
    msgRepositoryError: false,
    loader: false
  };

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loader: true });

    if (this.state.repositoryInput.length === 0)
      return this.setState({ msgEmpty: true });
    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      response.data.lastCommit = moment(response.data.pushed_at).fromNow();

      this.setState({
        repositoryInput: "",
        msgRepositoryError: false,
        repositories: [...this.state.repositories, response.data],
        loader: false
      });
    } catch (error) {
      return this.setState({ msgRepositoryError: true, loader: false });
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

        {this.state.loader ? (
          <Loader type="Oval" color="#fff" height="50" width="50" />
        ) : (
          ""
        )}

        <Cards repositories={this.state.repositories} />
      </Container>
    );
  }
}
