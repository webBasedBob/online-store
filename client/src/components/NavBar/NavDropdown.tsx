import React from "react";
import styles from "./NavDropdown.module.scss";
import Image from "next/image";

interface DropDownConfig {
  image: any;
  title: string;
  elements: string[];
  description: string;
}

const NavDropdown = ({
  image,
  title,
  elements,
  description,
}: DropDownConfig) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={image}
          alt={description}
          width={100}
          height={100}
        />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default NavDropdown;
