import styled from "styled-components";

export const Title = styled.h1`
  margin: 20px auto;
  font-size: 42px;
  text-align: center;
`;
export const Wrapper = styled.div`
  margin: 20px auto;
  width: 600px;
  font-size: 42px;
  text-align: center;
`;
export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
`;

export const Input = styled.input`
  margin: 10px;
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
  width: 60%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
  }
  &:hover {
    opacity: 0.9;
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
