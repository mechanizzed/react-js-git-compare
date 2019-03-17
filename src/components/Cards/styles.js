import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RepositoryCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #fff;
  border-radius: 3px;
  margin: 10px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    img {
      width: 64px;
      margin-bottom: 10px;
    }
    strong {
      font-size: 24px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 10px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        margin-left: 10px;
      }

      &:nth-child(2n - 1) {
        background-color: #f5f5f5;
      }
    }
  }
`;
