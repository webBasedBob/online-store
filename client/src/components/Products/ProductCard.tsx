import Card from "../UI/Card";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import ReviewsSummary from "./ReviewsSummary";
import Link from "next/link";
type ProductCardProps = {
  image: string;
  title: string;
  sale?: boolean;
};
export default function ProductCard({ image, title }: ProductCardProps) {
  let id;
  return (
    <Card customClass={styles.productCard}>
      <Link className={styles.link} href={`/product/${id}`}>
        <Image
          src={image}
          alt={`preview image of ${title}`}
          width={500}
          height={500}
          layout="responsive"
          className={styles.image}
        />
        <p className={styles.title}>{title}</p>
        <ReviewsSummary
          rating={Math.trunc(Math.random() * 5)}
          count={Math.trunc(Math.random() * 1000)}
        />
        <div className={styles.priceWrapper}></div>
      </Link>
      <AddToCartBtn />
    </Card>
  );
}
