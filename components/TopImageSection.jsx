import React from "react";
import styles from "../styles/Components/TopImageSection.module.css";

function TopImageSection({
  image,
  headingLeft,
  headingRight,
  headingRightmost,
  description,
}) {
  return (
    <div className={styles.firstSection}>
      <div className={styles.rightSection}>
        <h1>
          {headingLeft}{" "}
          <span className={styles.gradientText}>{headingRight}</span>{" "}
          {headingRightmost}
        </h1>
        <div>{description}</div>
      </div>
      <div className={styles.leftSection}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default TopImageSection;
