import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BeTrue - кастомная разработка</title>
        <meta name="description" content="Кастомная разработка web сервисов" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>.beTrue()</h1>
      </main>

      <footer className={styles.footer}>1</footer>
    </div>
  );
};

export default Home;
