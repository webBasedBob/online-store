"use client";
import React, { useState } from "react";
import styles from "./ProductsNav.module.scss";
import { Menu } from "@/assets/icons";
import ProdCategory from "./ProdCategory";
const ProductsNav = () => {
  const [mouseIsOverHeader, setMouseIsOverHeader] = useState(false);
  const [mouseIsOverBody, setMouseIsOverBody] = useState(false);
  const [btnWasClicked, setBtnWasClicked] = useState(false);
  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => {
        setMouseIsOverHeader(true);
      }}
      onMouseLeave={() => {
        setTimeout(
          () => {
            setMouseIsOverHeader(false);
            setBtnWasClicked(false);
          },
          btnWasClicked ? 5000 : 500
        );
      }}
      onClick={() => {
        setBtnWasClicked(true);
      }}
    >
      <button className={styles.button}>{Menu} Products</button>
      {(mouseIsOverHeader || mouseIsOverBody || btnWasClicked) && (
        <div
          className={styles.dropdown}
          onMouseEnter={() => {
            setMouseIsOverBody(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setMouseIsOverBody(false);
            }, 500);
          }}
        >
          <ProdCategory />
        </div>
      )}
    </div>
  );
};

export default ProductsNav;
