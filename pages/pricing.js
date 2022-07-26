import React from "react";
import { createClient } from "contentful";
import Benefits from "../components/Benefits";
import styles from "../styles/Pricing.module.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res1 = await client.getEntries({ content_type: "pricingPage1" });
  const res2 = await client.getEntries({ content_type: "pricingTopSection" });

  return {
    props: {
      test: res1.items,
      test1: res2.items,
    },
  };
}

const Pricing = (props) => {
  console.log(props.test1);
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.firstSection}>
          <div className={styles.imgSection}>
            <img src={"/pricing.svg"} alt="" />
          </div>
          <div className={styles.firstHead}>
            <h3>
              {props.test1[0].fields.heading1}{" "}
              <span>{props.test1[0].fields.heading2}</span>{" "}
              {props.test1[0].fields.heading3}
            </h3>
            <p>{props.test1[0].fields.description}</p>
          </div>
        </div>
        <div className={styles.secondSection}>
          <h4>What you get?</h4>
          <div className={styles.whatYouContainer}>
            {props.test.map((benefit) => (
              <Benefits key={benefit.sys.id} benefit={benefit} />
            ))}
            {/* <div className={styles.firstWhatGet}>
              <ul>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>365 days service</h1>
                    <p>
                      Our customer service team are always available to help you
                      24x7.
                    </p>
                  </div>
                </div>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>Cloud based</h1>
                    <p>
                      Access the software from anywhere and anytime via a web
                      browser.
                    </p>
                  </div>
                </div>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>Accessible on iOS and Android</h1>
                    <p>
                      Available on both operating systems Google Play Store and
                      Apple App Store
                    </p>
                  </div>
                </div>
              </ul>
            </div>
            <div className={styles.firstWhatGet}>
              <ul>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>One login for numerous users</h1>
                    <p>
                      No need of creating multiple accounts, use one login for
                      more than one business
                    </p>
                  </div>
                </div>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>Examine daily reports.</h1>
                    <p>
                      See your daily revenue, expenses, orders in just few
                      clicks.
                    </p>
                  </div>
                </div>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>
                      Hotels and Restaurants can be managed using the same
                      software.
                    </h1>
                    <p>
                      No need to use different software for your hotels.
                      BookonePOS can manage multiple services in one platform.
                    </p>
                  </div>
                </div>
              </ul>
            </div> */}
          </div>
        </div>
        <div className={styles.thirdSection}>
          <div className={styles.basicAndPremiumContainer}>
            <h2>
              BookOne POS
              <br /> Basic
            </h2>
            <ul>
              <li>Yes</li>
            </ul>
          </div>
          <div className={styles.basicAndPremiumContainer}>
            <h2>
              BookOne POS
              <br /> Premium
            </h2>
            <ul>
              <li>Yes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
