import Image from "next/image";
import styles from "./page.module.scss";
import { AuthModal } from "@/components/AuthModal/AuthModal";

export default function Home() {
  return (
    <div>
      <AuthModal />
    </div>
  );
}
