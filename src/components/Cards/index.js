import React from "react";

import { Container, RepositoryCard } from "./styles";

const Cards = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <RepositoryCard>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count}
            <small>stars</small>
          </li>
          <li>
            {repository.forks_count}
            <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count}
            <small>issues</small>
          </li>
          <li>
            {repository.pushed_at}
            <small>last commit</small>
          </li>
        </ul>
      </RepositoryCard>
    ))}
  </Container>
);

export default Cards;
