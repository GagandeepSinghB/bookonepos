import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import WhyBookOnePos from "../components/WhyBookOnePos";
import WhyBookOnePosNav from "../components/WhyBookOnePosNav";
import TrustedCard from "../components/TrustedCard";
import { AiOutlineDown } from "react-icons/ai";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "homePage" });

  return {
    props: {
      test: res.items,
    },
  };
}

export default function Home(props) {
  const [passedId, setPassedId] = useState(props.test[0].sys.id);
  const [title, setTitle] = useState(props.test[0].fields.title);
  const [content, setContent] = useState(
    documentToReactComponents(props.test[0].fields.content)
  );
  const [image, setImage] = useState(
    props.test[0].fields.image.fields.file.url
  );

  console.log(passedId);

  return (
    <div>
      <Head>
        <title>bookone-POS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroContainer}>
        <div className={styles.leftSection}>
          <div className={styles.heroText}>
            <h1 className={styles.Text1}>
              First
              <span
                className={styles.gradientText}
                style={{ marginLeft: "15px", marginRight: "15px" }}>
                mobile
              </span>{" "}
              POS software
            </h1>
            <p className={styles.Text2}>
              BookOnePOS solutions is unrivaled for providing a robust and
              flexible POS system that is reliable and unwavering in its
              performance, no matter the demands of your venue.
            </p>
            <button className={styles.heroTextButton}>Take a Free demo</button>
          </div>

          <div className={styles.polygon}>
            <img className={styles.polygonArrow} src="/heroArrow.svg" alt="" />
          </div>
        </div>

        <div className={styles.signUpContainer}>
          <div className={styles.signUpImg}>
            <img src="/Sign-Up.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.whyBigContainer}>
        <div className={styles.whyContainer}>
          <h3 className={styles.whyHeading}>Why BookOne POS?</h3>

          <div className={styles.tabContainer}>
            {props.test.map((feature) => (
              <WhyBookOnePosNav
                key={feature.sys.id}
                feature={feature}
                passedId={setPassedId}
                setTitle={setTitle}
                setContent={setContent}
                setImage={setImage}
              />
            ))}
          </div>

          <WhyBookOnePos title={title} content={content} image={image} />
        </div>

        <div className={styles.trustedRestContainer}>
          <h6>
            Trusted by <span>500+</span> Restaurants Partners
          </h6>
          <div className={styles.cards}>
            <TrustedCard
              image="/oracle.jpg"
              title="Qracle"
              desc="true"
              description="A QR scanner that enables guests to order meals from their table without having to call or wait for the waiter to deliver the menu card."
            />
            <TrustedCard
              image="/report.png"
              title="Cross Platform"
              desc="true"
              description="Our POS is capable of giving you insights into what is best for you. Such reports help you make better merchandising and pricing decisions in the future."
            />
            <TrustedCard
              image="/kot.png"
              title="KOT"
              brackQuote="true"
              desc="true"
              description="Reducing the risk due to manual mistakes, KOT saves time plus it greatly helps the management to have real-time reporting of all the orders that are placed at your restaurant."
            />
            <TrustedCard
              image="/management.png"
              title="Complete Order Management"
              descOrder="true"
            />
            <TrustedCard
              image="/report.png"
              title="Report Generation"
              desc="true"
              description="Our POS is capable of giving you insights into what is best for you. Such reports help you make better merchandising and pricing decisions in the future."
            />
          </div>
          <div className={styles.showMore}>
            <button>
              Show More <AiOutlineDown style={{ paddingTop: "5px" }} />
            </button>
          </div>
        </div>
        <div className={styles.outletTypeContainer}>
          <div className={styles.outletType}>
            <h4>Outlet Types</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
              sed do eiusmod tempor incididunt.
            </p>
            <div className={styles.outletCards}>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
