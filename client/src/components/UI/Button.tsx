"use client";
import styles from "./Button.module.scss";

const Button = ({
  customClass,
  label,
  pula,
}: {
  customClass?: string;
  label: string;
  pula: () => void;
}) => {
  return (
    <button onClick={pula} className={`${styles.button} ${customClass}`}>
      {label}
    </button>
  );
};

export default Button;
