import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin: 20px;
  width: 600px;
  font-size: 24px;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

const GithubButton = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      // await signInWithRedirect(auth, provider);
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Button onClick={onClick}>
        <Logo src="/github-logo.svg"></Logo>
        Continue with GitHub
      </Button>
    </>
  );
};

export default GithubButton;
