import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { Plate } from "../components/Plate";
import { plates } from "../config/plates";
import styles from "../styles/Home.module.css";

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>BeTrue - кастомная разработка</title>
        <meta name="description" content="Кастомная разработка web сервисов" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>.beTrue()</h1>
        <div className={styles.title_sub}>кастомная разработка</div>
        <div className={styles.positions}>
          {plates.map((item, i) => (
            <div key={i} className={styles.positionsItem}>
              <Plate {...item} />
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
