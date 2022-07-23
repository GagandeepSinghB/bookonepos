import React from "react";
import styles from "../../styles/Pos.module.css";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "inventoryManagement" });

  return {
    props: {
      test: res.items,
    },
  };
}

export default function InventoryManagement(props) {
  return (
    <div className={styles.firstSection}>
      <div className={styles.title}>
        {documentToReactComponents(props.test[0].fields.inventoryManagement)}

        <div className={styles.lines}>
          <hr className={styles.blueLine} />
          <hr className={styles.yellowLine} />
        </div>

        <div className={styles.descriptionHeading}>
          {documentToReactComponents(
            props.test[0].fields.inventoryManagementTag
          )}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionOne}>
          {documentToReactComponents(
            props.test[0].fields.aboutInventoryManagement
          )}
        </div>
        <div className={styles.sectionTwo}>
          <img src="/inventoryTwo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
