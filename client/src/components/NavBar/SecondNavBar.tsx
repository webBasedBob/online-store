import React from "react";
import styles from "./SecondNavBar.module.scss";
import ProductsNav from "./ProductsNav";

const SecondNavBar = () => {
  return (
    <div className={styles.container}>
      <ProductsNav />
    </div>
  );
};

export default SecondNavBar;
