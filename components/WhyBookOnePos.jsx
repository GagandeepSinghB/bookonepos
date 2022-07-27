import React from "react";
import styles from "../styles/Components/WhyBookOnePos.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function WhyBookOnePos(props) {
  return (
    <div className={styles.whyBookOnePosContainer}>
      <div className={styles.whyBookOnePosLeftSection}>
        <div className={styles.srNo}>
          <h1>0{props.srNo}</h1>
        </div>
        <div className={styles.whyBookOnePosDesc}>
          <h2>{props.title}</h2>
          <h3>{props.content}</h3>
        </div>
      </div>
      <div className={styles.whyBookOnePosRightSection}>
        <img src={"https:" + props.image} alt="" />
      </div>
    </div>
  );
}

export default WhyBookOnePos;
