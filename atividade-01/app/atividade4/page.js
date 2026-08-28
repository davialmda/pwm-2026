import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>

      <div className={styles.produtos}>

        <div className={styles.produto}>
          <img src="/calcado1.jpg" alt="Tênis para Esportes" />
          <h2>Tênis para Esportes</h2>
          <p>R$ 199,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/calcado2.jpg" alt="Tênis Social" />
          <h2>Tênis Social</h2>
          <p>R$ 159,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/calcado3.jpg" alt="Chuteira" />
          <h2>Chuteira</h2>
          <p>R$ 249,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/calcado4.jpg" alt="Sandália" />
          <h2>Sandália</h2>
          <p>R$ 99,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/calcado5.jpg" alt="Percata" />
          <h2>Percata</h2>
          <p>R$ 299,90</p>
        </div>

      </div>

      <footer className={styles.rodape}>
        Minha Loja de Calçados 
      </footer>

    </main>
  );
}