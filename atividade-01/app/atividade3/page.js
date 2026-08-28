import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <p className={styles.paragrafo}>
        Testando habilidades!
      </p>

      <a href="#" className={styles.link}>
        Google
      </a>

      <br />

      <a href="#" className={styles.link}>
        Instagram
      </a>
    </main>
  );
}