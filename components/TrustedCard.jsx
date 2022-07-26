import styles from "../styles/Components/TrustedCard.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function TrustedCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={"https:" + props.card.fields.image.fields.file.url} alt="" />
      </div>
      <div className={styles.title}>
        <h1>{props.card.fields.title}</h1>
      </div>
      <hr className={styles.line} />
      <div className={styles.description}>
        {documentToReactComponents(props.card.fields.description)}
      </div>
      <div className={styles.button}>
        <button>Know More</button>
      </div>
    </div>
  );
}
