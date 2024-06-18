import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/AuthComponent";
import GithubButton from "../components/GithubButton";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [err, setErr] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "password") {
      setPwd(value);
    } else {
      setEmail(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    if (isLoading || email === "" || pwd === "") return;
    console.log(name, email, pwd);
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, pwd);
      // 리다이렉션
      navigate("/");
    } catch (e) {
      // setErr
      if (e instanceof FirebaseError) {
        setErr(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Title>Login into X</Title>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <Input
            onChange={onChange}
            name="email"
            value={email}
            placeholder="email"
            type="text"
            required
          />

          <Input
            onChange={onChange}
            name="password"
            value={pwd}
            placeholder="pwd"
            type="password"
          />
          <Input
            name="submit"
            type="submit"
            value={isLoading ? "Loading..." : "Log in"}
          />
        </Form>
        {err !== "" ? <Error>{err}</Error> : null}

        <Switcher>
          Don't have an account?{" "}
          <Link to="/create-account">Create one &rarr;</Link>
        </Switcher>
        <br />
        <GithubButton />
      </Wrapper>
    </>
  );
};

export default Login;
