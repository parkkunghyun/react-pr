import React, { useState } from "react";
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/Authorized";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebae";
import { FirebaseError } from "firebase/app";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    if (email === "" || password === "" || isLoading) return;
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setErr(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Title>로그인 페이지</Title>
        <Form onSubmit={onSubmit}>
          <Input
            onChange={onChange}
            value={email}
            type="email"
            name="email"
            placeholder="email"
          ></Input>
          <Input
            onChange={onChange}
            value={password}
            type="password"
            name="password"
            placeholder="password"
          ></Input>
          <Input
            value={isLoading ? "Loading..." : "로그인"}
            type="submit"
          ></Input>
        </Form>
        {err !== "" ? <Error>{err}</Error> : null}
        <Switcher>
          계정이 없으신가요? <Link to="/signup">회원가입하기 &rarr;</Link>
        </Switcher>
      </Wrapper>
    </>
  );
};

export default Login;
