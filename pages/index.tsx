import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FinDev - Permitindo conexões</title>
        <link rel="icon" href="/LogoTone.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Fin</span> <a>Dev</a>
        </h1>

        <p className={styles.description}>O inicio de um projeto</p>
          <a
            href="https://twitch.tv/tonelive"
            target="_blank"
            className={styles.code}
          >
            Desenvolvido ao vivo na <br />
            twitch.tv/tonelive
          </a>

      </main>

      <footer className={styles.footer}>
        <img src="LogoTonelive.png" className={styles.tone} />
      </footer>
    </div>
  );
}
