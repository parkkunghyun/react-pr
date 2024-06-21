import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 48px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 350px;
  height: 400px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  border: 1px solid white;
  border-radius: 10px;
  height: 40px;
  padding: 10px;
  color: white;
  font-size: 16px;

  &[type="submit"] {
    cursor: pointer;
  }
`;

export const Error = styled.span`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: tomato;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  font-size: 20px;
  a {
    color: gray;
  }
`;
