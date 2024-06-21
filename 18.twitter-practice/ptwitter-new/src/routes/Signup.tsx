import { Link, useNavigate } from "react-router-dom";
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/Authorized";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebae";
import { FirebaseError } from "firebase/app";

const Signup = () => {
  // 각각 저장할 useState필요
  // 그리고 onSubmit했을때 작동할 함수 필요

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(""); // 문구로 적어줄 예정

  const navigate = useNavigate(); // 회원가입 되면 홈화면으로 바로 옮겨줄 예정

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    if (name === "" || email === "" || password === "" || isLoading === true)
      return;
    try {
      setIsLoading(true);
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(newUser.user, {
        displayName: name,
      });
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
        <Title>Sign up page</Title>
        <Form onSubmit={onSubmit}>
          <Input
            onChange={onChange}
            value={name}
            name="name"
            type="text"
            placeholder="이름"
          ></Input>
          <Input
            onChange={onChange}
            value={email}
            name="email"
            type="email"
            placeholder="email"
          ></Input>
          <Input
            onChange={onChange}
            value={password}
            name="password"
            type="password"
            placeholder="password"
          ></Input>
          <Input
            name="submit"
            type="submit"
            value={isLoading ? "Loading..." : "회원가입"}
          ></Input>
        </Form>
        {err !== "" ? <Error>{err}</Error> : null}
        <Switcher>
          이미 계정이 있으신가요? <Link to="/login">Log in &rarr;</Link>
        </Switcher>
      </Wrapper>
    </>
  );
};

export default Signup;
