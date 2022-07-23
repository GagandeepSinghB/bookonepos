import styles from "../styles/Pricing.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Benefits(props) {
  return (
    <div className={styles.part}>
      <div className={styles.circle}></div>
      <div className={styles.content}>
        <h1>{props.benefit.fields.title}</h1>
        <div>{documentToReactComponents(props.benefit.fields.about)}</div>
      </div>
    </div>
  );
}
