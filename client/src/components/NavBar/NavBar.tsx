import styles from "./NavBar.module.scss";
import logo from "../../assets/logo.jpg";
import Image from "next/image";
import TextInput from "../UI/TextInput";
import NavDropdown from "./NavDropdown";
import avatar from "../../assets/profile.png";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image className={styles.logoImg} src={logo} alt="logo" />
      </div>
      <TextInput />
      <NavDropdown
        image={avatar}
        title="Your profile"
        elements={["tu esti", "tot tu"]}
        description="Profile"
      />
      <NavDropdown
        image={avatar}
        title="Altceva"
        elements={["tu esti", "tot tu"]}
        description="Profile"
      />
      <NavDropdown
        image={avatar}
        title="Pula"
        elements={["tu esti", "tot tu"]}
        description="Profile"
      />
    </div>
  );
};

export default NavBar;
