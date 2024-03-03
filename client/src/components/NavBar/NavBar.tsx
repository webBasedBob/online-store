"use client";
import styles from "./NavBar.module.scss";
import logo from "../../assets/logo.jpg";
import Image from "next/image";
import TextInput from "../UI/TextInput";
import NavDropdown from "./NavDropdown";
import avatar from "../../assets/profile.jpg";
import { Cart, Close, Heart, SearchIcon } from "../../assets/icons";
import SecondNavBar from "./SecondNavBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setSearchInputText } from "@/redux/slices/products";

const NavBar = () => {
  const [searchInputIsFocused, setSearchInputIsFocused] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const searchSuggestions = ["dnaksjhdjsa", "dasdsad", "dskjadhksaj"];
  const dispatch = useDispatch<AppDispatch>();
  const searchTermRedux = useSelector(
    (state) => state.products.searchInputText
  );
  const filtersRedux = useSelector((state) => state.products.filters);
  useEffect(() => {
    dispatch(getProducts());
  }, [searchTermRedux, filtersRedux]);
  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image className={styles.logoImg} src={logo} alt="logo" />
        </Link>
        <div className={styles.searchContainer}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(setSearchInputText(searchInputValue));
            }}
            className={styles.searchBar}
          >
            <input
              type="text"
              className={styles.input}
              onFocus={() => {
                setSearchInputIsFocused(true);
              }}
              onBlur={() => {
                setSearchInputIsFocused(false);
              }}
              value={searchInputValue}
              onChange={(e) => {
                setSearchInputValue(e.target.value);
              }}
            />
            {searchInputIsFocused && (
              <div className={`${styles.searchIcon} ${styles.close}`}>
                {Close}
              </div>
            )}
            <button
              type="submit"
              className={`${styles.searchIcon} ${styles.searchBtn}`}
            >
              {SearchIcon}
            </button>
          </form>
          <AnimatePresence>
            {searchInputIsFocused && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: null }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.expandedSearch}
              >
                <p className={styles.popularSearchText}>
                  {searchInputValue === ""
                    ? "Popular searches:"
                    : "Search suggestions"}
                </p>
                {searchSuggestions.map((suggestion) => (
                  <p key={suggestion} className={styles.searchSuggestion}>
                    {suggestion}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <NavDropdown
          href="/account"
          image={avatar}
          title="Your profile"
          elements={["My orders", "Favorites", "Account"]}
          description="Profile"
          hasChevron={false}
        />
        <NavDropdown
          href="/favorites"
          svg={Heart}
          title="Favorites"
          elements={[]}
          description="Profile"
          hasChevron={false}
        />
        <NavDropdown
          href="/cart"
          svg={Cart}
          title="Cart"
          elements={[]}
          description="Profile"
          hasChevron={true}
        />
      </div>
      <SecondNavBar />
    </>
  );
};

export default NavBar;
