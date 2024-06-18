import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

const CreateAccount = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [err, setErr] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPwd(value);
    } else {
      setEmail(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    if (isLoading || name === "" || email === "" || pwd === "") return;
    console.log(name, email, pwd);
    try {
      setIsLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        pwd
      );
      console.log(credentials.user);
      await updateProfile(credentials.user, {
        displayName: name,
      });
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
      <Title>Join into X</Title>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <Input
            onChange={onChange}
            name="name"
            value={name}
            placeholder="Name"
            type="text"
            required
          />
          <Input
            onChange={onChange}
            name="email"
            value={email}
            placeholder="Email"
            type="email"
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
            value={isLoading ? "Loading..." : "create Account"}
          />
        </Form>
        {err !== "" ? <Error>{err}</Error> : null}
        <Switcher>
          already have an account? <Link to="/login">Log in &rarr;</Link>
        </Switcher>
      </Wrapper>
    </>
  );
};

export default CreateAccount;
