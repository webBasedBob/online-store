import styles from "./Card.module.scss";

export default function Card({
  children,
  customClass,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${styles.card} ${customClass}`}>{children}</div>;
}
