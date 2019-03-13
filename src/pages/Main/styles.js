import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    padding: 20px;
    border: 0;
    font-size: 18px;
    color: #666;
  }

  button {
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    border: 0;
    color: #fff;
    background-color: #5f26ad;

    &:hover {
      background-color: #4c1696;
    }
  }
`;
