"use client";
import React, { useState } from "react";
import styles from "./AuthModal.module.scss";
import Card from "../UI/Card";
import TextInput from "../UI/TextInput";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

export const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
    username: "",
  });
  const signUp = async () => {
    const response = await fetch(`http://localhost:8000/auth/create-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupCredentials),
    });
    const res2 = await response.json();
    console.log(res2);
  };
  const login = async () => {
    const response = await fetch(`http://localhost:8000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCredentials),
    });
    const res2 = await response.json();
    console.log(res2);
  };
  const modalContent = isLogin ? (
    <>
      <TextInput
        textInputType={"email"}
        label="email"
        value={loginCredentials.email}
        onChange={(newVal: string) => {
          setLoginCredentials((prevState) => {
            return {
              email: newVal,
              password: prevState.password,
            };
          });
        }}
      />
      <TextInput
        textInputType={"password"}
        label="password"
        value={loginCredentials.password}
        onChange={(newVal: string) => {
          setLoginCredentials((prevState) => {
            return {
              email: prevState.email,
              password: newVal,
            };
          });
        }}
      />
      <Button label="log in" pula={login} />
    </>
  ) : (
    <>
      <TextInput
        label="username"
        value={signupCredentials.username}
        onChange={(newVal: string) => {
          setSignupCredentials((prevState) => {
            return {
              username: newVal,
              email: prevState.email,
              password: prevState.password,
            };
          });
        }}
      />
      <TextInput
        textInputType={"email"}
        label="email"
        value={signupCredentials.email}
        onChange={(newVal: string) => {
          setSignupCredentials((prevState) => {
            return {
              username: prevState.username,
              email: newVal,
              password: prevState.password,
            };
          });
        }}
      />
      <TextInput
        textInputType={"password"}
        label="password"
        value={signupCredentials.password}
        onChange={(newVal: string) => {
          setSignupCredentials((prevState) => {
            return {
              username: prevState.username,
              email: prevState.email,
              password: newVal,
            };
          });
        }}
      />
      <Button label="sign up" pula={signUp} />
    </>
  );
  const togglerContent = isLogin ? (
    <div className={styles.toggler}>
      <p>you don't have an account?</p>
      <button
        onClick={() => {
          setIsLogin(false);
        }}
      >
        sign up
      </button>
      <p>instead</p>
    </div>
  ) : (
    <div className={styles.toggler}>
      <p>you already have an account?</p>
      <button
        onClick={() => {
          setIsLogin(true);
        }}
      >
        log in
      </button>
      <p>instead</p>
    </div>
  );
  return (
    <Modal>
      {" "}
      <div className={styles.wrapper}>
        {modalContent}
        {togglerContent}
      </div>
    </Modal>
  );
};
