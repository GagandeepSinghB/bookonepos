import React from "react";
import Link from "next/link";
import { createClient } from "contentful";
import styles from "../styles/Integration.module.css";
import TopImageSection from "../components/TopImageSection";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "integrationPage" });

  return {
    props: {
      test: res.items,
    },
  };
}

export default function Integration(props) {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <TopImageSection
          image="/integration.svg"
          headingLeft={props.test[0].fields.aFullyIntegratedSoftware}
          headingRight=""
          description={props.test[0].fields.aboutIntegration}
        />
        {/* <div className={styles.signUpContainer}>
          <div className={styles.FirstIntegrationImg}>
            <img src="/integration.svg" alt="" />
          </div>
        </div>
        <div className={styles.leftSection}>
          <div className={styles.heroText}>
            <h1 className={styles.Text1}>
              {props.test[0].fields.aFullyIntegratedSoftware}
            </h1>
            <p className={styles.Text2}>
              {props.test[0].fields.aboutIntegration}
            </p>
          </div>
        </div> */}
      </div>

      <div className={styles.integration}>
        <div className={styles.leftSection1}>
          <div className={styles.heading}>
            <h1>
              <span>Payment & </span>
              <br />
              Online Order Integration
            </h1>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.contents}>
            <div className={styles.row}>
              <div className={styles.content}>
                <Link href="/">
                  <img src="/Zomato_Logo 1.png" alt="" />
                </Link>
              </div>
              <div className={styles.content}>
                <Link href="/">
                  <img src="/images 1.png" alt="" />
                </Link>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                <Link href="/">
                  <img src="/Swiggy_Logo 1.png" alt="" />
                </Link>
              </div>
              <div className={styles.content}>
                <Link href="/">
                  <img src="/Payment Icons.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileIntegration}>
        <h4>Payment & Online Order Integration</h4>
        <div className={styles.integrationCards}>
          <div className={styles.integrationCard}>
            <Link href="/">
              <img src="/Zomato_Logo_Mobile.png" alt="" />
            </Link>
          </div>
          <div className={styles.integrationCard}></div>
          <div className={styles.integrationCard}></div>
          <div className={styles.integrationCard}></div>
        </div>
      </div>
    </div>
  );
}
