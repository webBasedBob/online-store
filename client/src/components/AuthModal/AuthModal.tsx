"use client";
import React, { useEffect, useState } from "react";
import styles from "./AuthModal.module.scss";
import Card from "../UI/Card";
import TextInput from "../UI/TextInput";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import {
  getLoginState,
  loginWithCredentials,
  signupWithCredentials,
} from "@/redux/slices/auth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
export const AuthModal = () => {
  const dispatch = useAppDispatch();
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
  const signUp = () => {
    dispatch(signupWithCredentials(signupCredentials));
  };
  const loginGoogle = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };
  const login = () => {
    dispatch(loginWithCredentials(loginCredentials));
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
        <div className={styles.socialLogin}>
          <p>Or use socials:</p>
          <div className={styles.socialsIconsWrapper}>
            <p onClick={loginGoogle} className={styles.googleIcon}>
              google placeholder
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
