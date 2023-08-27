import React from "react";
import styles from "./Modal.module.scss";
import Overlay from "./Overlay";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Overlay>
      <div className={styles.modal}>{children}</div>;
    </Overlay>
  );
};

export default Modal;
