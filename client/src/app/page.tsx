"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { AuthModal } from "@/components/AuthModal/AuthModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getLoginState } from "@/redux/slices/auth";
import { useEffect, useReducer, useState } from "react";
import ProductCard from "@/components/Products/ProductCard";
import SortBar from "@/components/Home/SortBar";
import FiltersCard from "@/components/Home/FiltersCard";
import { filter } from "@/types/home";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getProducts } from "@/redux/slices/products";
import { createProductTitle } from "@/utils/utils";

export default function Home() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const products = useSelector((state) => state.products.productsList);
  const [authJSX, setAuthJSX] = useState(null);
  const [prodJSX, setProdJSX] = useState();
  const filters: filter[] = useSelector(
    (state: RootState) => state.products.filters
  );
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (authState.isLoggedIn === null) {
      dispatch(getLoginState());
    }
    if (authState.isLoggedIn !== null) {
      let jsx = authState.isLoggedIn ? <></> : <AuthModal />;
      setAuthJSX(jsx);
    }
  }, [authState]);

  useEffect(() => {
    if (products.length > 0) {
      let tempJSX = products.map((prod) => {
        return (
          <ProductCard
            image={prod.image}
            title={createProductTitle(prod)}
            sale={prod.curent_price}
            key={prod.id}
          />
        );
      });
      setProdJSX(tempJSX);
    }
    if (products.length === 0) {
      setProdJSX(<></>);
    }
  }, [products]);

  return (
    <div className={styles.pageContent}>
      {authJSX}
      <SortBar />
      <div className={styles.filters}>
        {filters.map((filter) => {
          return <FiltersCard filter={filter} key={filter.name} />;
        })}
      </div>
      <div className={styles.productsContainer}>{prodJSX}</div>
    </div>
  );
}
