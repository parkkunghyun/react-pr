import { auth } from "../firebae";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  border: 1px solid blue;
  background-color: white;
  color: black;
  padding: 10px;
`;

const Home = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    await auth.signOut();
    navigate("/login");
  };
  return (
    <>
      <Btn onClick={onClick}>로그아웃</Btn>
    </>
  );
};

export default Home;
