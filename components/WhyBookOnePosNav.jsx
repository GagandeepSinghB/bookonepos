import styles from "../styles/Home.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState } from "react";

export default function WhyBookOnePosNav(props) {
  function test() {
    // console.log(props.feature.sys.id);
    // console.log(props.index + 1);
    props.passedId(props.feature.sys.id);
    props.setTitle(props.feature.fields.title);
    props.setContent(documentToReactComponents(props.feature.fields.content));
    props.setImage(props.feature.fields.image.fields.file.url);
    props.setSrNo(props.index + 1);
  }

  return (
    <ul className={styles.whyUnorderedList}>
      <li
        className={styles.whyOrderList}
        onClick={() => {
          test();
          // toggleClass();
        }}>
        {props.feature.fields.shortTitle}
      </li>
    </ul>
  );
}
