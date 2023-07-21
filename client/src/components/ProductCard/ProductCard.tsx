import { type } from "os";
import Card from "../UI/Card";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
type ProductCardProps = {
  image: string;
  title: string;
  sale?: boolean;
};
export default function ProductCard({ image, title }: ProductCardProps) {
  return (
    <Card>
      <Image src={image} alt="string text" />
      <h4>{title}</h4>
    </Card>
  );
}
