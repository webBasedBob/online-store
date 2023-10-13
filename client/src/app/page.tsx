"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { AuthModal } from "@/components/AuthModal/AuthModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getLoginState } from "@/redux/slices/auth";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const getState = () => {
    dispatch(getLoginState());
  };
  let authJSX;
  useEffect(() => {
    getState();
    authJSX = authState.isLoggedIn ? <></> : <AuthModal />;
  }, []);
  return <div>{authJSX}</div>;
}
