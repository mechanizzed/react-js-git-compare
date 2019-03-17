import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin: 40px auto;
  width: 100%;
  max-width: 500px;
  display: flex;

  input {
    flex: 1;
    padding: 15px;
    font-size: 15px;
    color: #666;
    border: ${props => (props.withError ? "2px solid #F00" : 0)};
  }

  button {
    min-width: 130px;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border: 0;
    color: #fff;
    background-color: #5f26ad;

    &:hover {
      background-color: #4c1696;
    }
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  max-width: 500px;
  align-items: center;
  margin-bottom: 10px;
  background-color: rgba(95, 38, 172, 0.8);
  padding: 10px;

  p {
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
  }
`;
