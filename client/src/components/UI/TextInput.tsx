"use client";
import styles from "./TextInput.module.scss";

const TextInput = ({
  customClass,
  id,
  label,
  value,
  onChange,
  textInputType = "text",
}: {
  customClass?: string;
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  textInputType?: string;
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        id={id}
        className={`${styles.input} ${customClass}`}
        type={textInputType}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </>
  );
};

export default TextInput;
