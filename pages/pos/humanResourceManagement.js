import React from "react";
import styles from "../../styles/Pos.module.css";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "humanResourceManagement",
  });

  return {
    props: {
      test: res.items,
    },
  };
}

export default function InventoryManagement(props) {
  console.log(props);
  return (
    <div className={styles.firstSection}>
      <div className={styles.title}>
        {documentToReactComponents(props.test[0].fields.hrmHeading)}

        <div className={styles.lines}>
          <hr className={styles.blueLine} />
          <hr className={styles.yellowLine} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionHRM_Cus}>
          {documentToReactComponents(props.test[0].fields.hrmContent)}
        </div>
        <div className={styles.sectionTwo}>
          <img src="/inventoryThree.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
