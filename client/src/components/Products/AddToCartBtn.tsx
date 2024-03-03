import React from "react";
import styles from "./AddToCartBtn.module.scss";
import { Cart } from "@/assets/icons";
const AddToCartBtn = () => {
  return (
    <div className={styles.addToCartWrapper}>
      <div className={styles.cartIcon}>{Cart}</div>
      <button className={styles.addToCartBtn}>Add to cart</button>
    </div>
  );
};

export default AddToCartBtn;
