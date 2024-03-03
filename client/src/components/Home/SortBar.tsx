"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SortBar.module.scss";
import { ArrowDown, ChevronDown, Menu, MenuSquares } from "@/assets/icons";
import { motion, AnimatePresence } from "framer-motion";

const SortBar = () => {
  const [selectedOrderBy, setSelectedOrderBy] = useState(`relevance`);
  const [orderByOptionsShown, setOrderByOptionsShown] = useState(false);
  const options = [`relevance`, `price`, `aaaaaaa`];
  const dropdownRef = useRef(null);
  const AllOptionsJSX = () => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOrderByOptionsShown(false);
      }
    };
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [orderByOptionsShown]);
    return (
      <motion.div
        initial={{ height: 0, marginBottom: 0 }}
        animate={{ height: null, marginBottom: 10 }}
        exit={{ height: 0, marginBottom: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.allOrderByOptions}
      >
        {options.map((option) => (
          <p
            className={styles.orderByOption}
            onClick={(e) => {
              setOrderByOptionsShown(false);
              setSelectedOrderBy(e.target.innerText);
            }}
          >
            {option}
          </p>
        ))}
      </motion.div>
    );
  };

  const [displayMode, setDisplayMode] = useState("grid");

  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <p>Order by:</p>
        <div className={styles.orderOptions} ref={dropdownRef}>
          <div
            className={styles.selectedOrderBy}
            onClick={() => {
              setOrderByOptionsShown((state) => !state);
            }}
          >
            <span>{selectedOrderBy}</span>
            <span className={styles.chevron}>{ChevronDown}</span>
          </div>
          <AnimatePresence>
            {orderByOptionsShown && <AllOptionsJSX />}
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.display}>
        <p>Display mode:</p>
        <div
          className={styles.displayButtons}
          onClick={(e) => {
            const closestDiv = e.target.closest(`div`);
            const displayMode = closestDiv.dataset["display_mode"];
            if (displayMode) {
              setDisplayMode(displayMode);
            }
          }}
        >
          <div
            data-display_mode="list"
            className={displayMode === "list" ? styles.displayBtnActive : ""}
          >
            {Menu}
          </div>
          <div
            data-display_mode="grid"
            className={displayMode === "grid" ? styles.displayBtnActive : ""}
          >
            {MenuSquares}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
