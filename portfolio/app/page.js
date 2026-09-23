import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>
        <span className={styles.logo}>Davi Almeida</span>
        <div>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section id="inicio" className={styles.hero}>
        <h1>Olá, eu sou o Davi.</h1>
        <p>Estudante de Ciência da Computação, 5º período.</p>
      </section>

      <section id="sobre" className={styles.section}>
        <h2>Sobre mim</h2>
        <p>
          Curso Ciência da Computação e já participei de iniciação
          científica com processos estocásticos, otimização convexa,
          dinâmica não linear e neurônios excitáveis em FPGA (Verilog).
        </p>
      </section>

      <section className={styles.section}>
        <h2>Experiência Acadêmica</h2>
        <ul>
          <li>
            <strong>Iniciação Científica </strong> (2024.2 - 2025.2)
            <p>Utilização de Smartwatches para Monitoramento Multifuncional de Saúde: Uma abordagem Integrada para Prevenção e Monitoramento de Doenças</p>
            <p>🏆 3º lugar na categoria Ciências Exatas e da Terra.</p>
          </li>
          <li>
            <strong>Iniciação Científica  </strong> (2025.2 - 2026.1)
            <p>Gestão de Carteiras de Investimentos Utilizando Modelos de Inteligência Artificial</p>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Experiência Profissional</h2>
        <ul>
          <li>
            <strong>Pesquisador de Iniciação Científica </strong> (2024 - atual)
            <p></p>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Atividades</h2>
        <ul>
          <li>Grupo de pesquisa em finanças inteligentes</li>
          <li>Grupo de pesquisa em neurofísica computacional</li>
        </ul>
      </section>

      <section id="projetos" className={styles.section}>
        <h2>Projetos</h2>
        <div className={styles.projects}>
          <div className={styles.card}></div>
          <div className={styles.card}>
            <h3>Jogo da Forca</h3>
            <Link href="/forca">Ver Projeto</Link>
          </div>
          <div className={styles.card}></div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          <span>verilog</span>
          <span>C</span>
          <span>React</span>
          <span>Python</span>
        </div>
      </section>

      <section id="contato" className={styles.section}>
        <h2>Contato</h2>
        <p>Email: contatoalmeidadavi@gmail.com</p>
      </section>
    </div>
  );
}
