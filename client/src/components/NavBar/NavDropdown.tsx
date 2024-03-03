"use client";
import React, { useState } from "react";
import styles from "./NavDropdown.module.scss";
import Image from "next/image";
import { ChevronDown } from "../../assets/icons";
import Link from "next/link";

interface DropDownConfig {
  image?: any;
  title: string;
  elements: string[];
  description: string;
  svg?: any;
  href: string;
  hasChevron: boolean;
}

const NavDropdown = ({
  image,
  svg,
  title,
  elements,
  description,
  href,
  hasChevron,
}: DropDownConfig) => {
  const [mouseIsOverHeader, setMouseIsOverHeader] = useState(false);
  const [mouseIsOverBody, setMouseIsOverBody] = useState(false);
  return (
    <Link
      href={href}
      className={styles.wrapper}
      onMouseEnter={() => {
        setMouseIsOverHeader(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setMouseIsOverHeader(false);
        }, 500);
      }}
    >
      <div className={styles.imageContainer}>
        {image ? (
          <Image className={styles.image} src={image} alt={description} />
        ) : (
          svg
        )}
      </div>
      <p className={styles.title}>{title}</p>
      {hasChevron && <div className={styles.arrow}>{ChevronDown}</div>}
      {hasChevron &&
        (mouseIsOverHeader || mouseIsOverBody) &&
        elements.length > 0 && (
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
    </Link>
  );
};

export default NavDropdown;
