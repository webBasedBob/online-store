"use client";
import React, { useState } from "react";
import styles from "./ProdCategory.module.scss";
const elements: string[] = ["iPhone"];
const ProdCategory = () => {
  const [mouseIsOverHeader, setMouseIsOverHeader] = useState(false);
  const [mouseIsOverBody, setMouseIsOverBody] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setMouseIsOverHeader(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setMouseIsOverHeader(false);
        }, 500);
      }}
    >
      <p className={styles.title}>Smartphones</p>
      {(mouseIsOverHeader || mouseIsOverBody) && elements.length > 0 && (
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
          {elements.map((el: string) => {
            return <div>{el}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default ProdCategory;
