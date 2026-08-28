import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.vermelho}>
        DIV vermelho
      </div>

      <div className={styles.verde}>
        DIV verde
      </div>
    </main>
  );
}