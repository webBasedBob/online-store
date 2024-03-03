import React from "react";
import styles from "./ReviewsSummary.module.scss";
import ratingImg from "../../assets/rating.png";
import Image from "next/image";
const ReviewsSummary = ({
  rating,
  count,
}: {
  rating: number;
  count: number;
}) => {
  const ratingInPercentage = ((rating / 5) * 100).toFixed(0);
  const ratingColorStyle = { width: `${ratingInPercentage}%` };
  return (
    <div className={styles.rating}>
      <div className={styles.ratingImg}>
        <Image src="/rating.png" height={100} width={100} alt="dsad" />
        <div style={ratingColorStyle} className={styles.ratingBackground}></div>
      </div>
      <p className={styles.ratingValue}>{rating}</p>
      <p className={styles.ratingCount}>({count})</p>
    </div>
  );
};

export default ReviewsSummary;
