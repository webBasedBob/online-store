"use client";
import React from "react";
import styles from "./Overlay.module.scss";
import { createPortal } from "react-dom";

const Overlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {createPortal(
        <div className={styles.overlayOuter}>
          <div className={styles.overlayInner}></div>
          {children}
        </div>,
        document.body
      )}
      ;
    </div>
  );
};

export default Overlay;
