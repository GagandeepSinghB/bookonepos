import styles from "../styles/Home.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState } from "react";

let i = 0;
let lst;

if (typeof window !== "undefined") {
  lst = document.querySelectorAll(".lst");
  lst[i].style.backgroundColor = "black";
  lst[i].style.color = "white";
}

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
  const list = () => {
    i = props.index;

    for (let j = 0; j < lst.length; j++) {
      lst[j].style.backgroundColor = "";
      lst[j].style.color = "";
    }

    if (i == `${props.index}`) {
      lst[i].style.backgroundColor = "black";
      lst[i].style.color = "white";
    }

    console.log(lst);
  };

  return (
    <ul className={styles.whyUnorderedList}>
      <li
        className={`${styles.whyOrderList} lst`}
        style={{ color: "", backgroundColor: "" }}
        onClick={() => {
          test();
          list();
          // toggleClass();
        }}
      >
        {props.feature.fields.shortTitle}
      </li>
    </ul>
  );
}
