import styles from "./NavBar.module.scss";
import logo from "../../assets/logo.jpg";
import Image from "next/image";
import TextInput from "../UI/TextInput";
import NavDropdown from "./NavDropdown";
import avatar from "../../assets/profile.jpg";
import { Cart, Heart } from "../../assets/icons";
import SecondNavBar from "./SecondNavBar";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image className={styles.logoImg} src={logo} alt="logo" />
        </Link>
        <TextInput />
        <NavDropdown
          href="/account"
          image={avatar}
          title="Your profile"
          elements={["My orders", "Favorites", "Account"]}
          description="Profile"
        />
        <NavDropdown
          href="/favorites"
          svg={Heart}
          title="Favorites"
          elements={[]}
          description="Profile"
        />
        <NavDropdown
          href="/cart"
          svg={Cart}
          title="Cart"
          elements={[]}
          description="Profile"
        />
      </div>
      <SecondNavBar />
    </>
  );
};

export default NavBar;
