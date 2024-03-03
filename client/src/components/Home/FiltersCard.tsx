"use client";

import { filter, filterData } from "@/types/home";
import Card from "../UI/Card";
import styles from "./FiltersCard.module.scss";
import { ChevronDown } from "@/assets/icons";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { isClassDeclaration } from "typescript";
import { setFilterValues } from "@/redux/slices/products";
import { filterState } from "@/types/redux";

const FiltersCard = ({ filter }: { filter: filter }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(true);
  const dispatch = useDispatch();
  const handleFilterClick = (e) => {
    const isChecked = e.target.checked;
    const clickedOption = e.target.dataset.filterName;
    const stateData: filterState = {
      filterName: filter.name,
      optionName: clickedOption,
      isChecked: isChecked,
    };
    dispatch(setFilterValues(stateData));
    console.log(stateData);
  };
  return (
    <Card customClass={styles.container}>
      <div
        className={styles.filterTitle}
        onClick={() => {
          setFilterIsOpen((prevState) => !prevState);
        }}
      >
        <span>{filter.name}</span>
        <motion.span
          animate={{ rotate: filterIsOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className={styles.chevron}
        >
          {ChevronDown}
        </motion.span>
      </div>
      <AnimatePresence>
        {filterIsOpen && (
          <motion.div
            initial={{ height: 0, marginBottom: 0 }}
            animate={{ height: null, marginBottom: 10 }}
            exit={{ height: 0, marginBottom: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.filterBody}
          >
            {filter.data.map((filter) => {
              return (
                <div className={styles.optionContainer} key={filter.name}>
                  <input
                    id={filter.name}
                    data-filter-name={filter.name}
                    type="checkbox"
                    className={styles.checkbox}
                    onChange={handleFilterClick}
                    checked={filter.isChecked}
                  />
                  <label htmlFor={filter.name}>
                    <span className={styles.optionName}>{filter.name}</span>
                    <span className={styles.quantity}>({filter.quantity})</span>
                  </label>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default FiltersCard;
