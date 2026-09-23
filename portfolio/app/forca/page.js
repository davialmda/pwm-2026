"use client";

import { useState } from "react";
import styles from "./page.module.css";

const palavras = [
  "REACT", "JAVASCRIPT", "PYTHON", "COMPUTADOR", "TECLADO",
  "MONITOR", "PROGRAMA", "ALGORITMO", "VARIAVEL", "FUNCAO",
  "OBJETO", "ARRAY", "STRING", "BOOLEANO", "INTERNET",
  "NAVEGADOR", "SERVIDOR", "BANCO", "USUARIO", "SENHA",
  "SISTEMA", "REDE", "PROCESSADOR", "MEMORIA", "ARQUIVO",
  "PASTA", "JANELA", "BOTAO", "TELA", "MOUSE",
  "IMPRESSORA", "SOFTWARE", "HARDWARE", "LINGUAGEM", "COMPILADOR",
];

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const maxErros = 6;

function palavraAleatoria() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function Forca() {
  const [palavra, setPalavra] = useState(palavraAleatoria());
  const [usadas, setUsadas] = useState([]);

  let erros = 0;
  for (let i = 0; i < usadas.length; i++) {
    if (!palavra.includes(usadas[i])) erros++;
  }

  const venceu = palavra.split("").every((l) => usadas.includes(l));
  const perdeu = erros >= maxErros;
  const fimDeJogo = venceu || perdeu;

  function tentarLetra(letra) {
    if (fimDeJogo || usadas.includes(letra)) return;
    setUsadas([...usadas, letra]);
  }

  function reiniciar() {
    setPalavra(palavraAleatoria());
    setUsadas([]);
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <span className={styles.logo}>Thiago Silva</span>
        <div>
          <a href="/#inicio">Início</a>
          <a href="/#sobre">Sobre</a>
          <a href="/#projetos">Projetos</a>
          <a href="/#contato">Contato</a>
        </div>
      </nav>

      <h1 className={styles.title}>Jogo da Forca</h1>

      <div className={styles.desenho}>
        <pre>{desenhoForca(erros)}</pre>
      </div>

      <div className={styles.palavra}>
        {palavra.split("").map((letra, i) => (
          <span key={i}>
            {usadas.includes(letra) || fimDeJogo ? letra : "_"}{" "}
          </span>
        ))}
      </div>

      {fimDeJogo && (
        <p className={venceu ? styles.win : styles.lose}>
          {venceu
            ? "Parabéns, você acertou!"
            : "Você perdeu! A palavra era: " + palavra}
        </p>
      )}

      <button className={styles.restart} onClick={reiniciar}>
        Reiniciar
      </button>

      <p>Erros: {erros} / {maxErros}</p>

      <div className={styles.teclado}>
        {letras.map((letra) => (
          <button
            key={letra}
            disabled={usadas.includes(letra) || fimDeJogo}
            onClick={() => tentarLetra(letra)}
            className={
              usadas.includes(letra)
                ? palavra.includes(letra)
                  ? styles.certo
                  : styles.errado
                : ""
            }
          >
            {letra}
          </button>
        ))}
      </div>

      <p className={styles.tentadas}>
        Letras tentadas: {usadas.join(", ")}
      </p>
    </div>
  );
}


function desenhoForca(erros) {
  const cabeca = erros >= 1 ? "O" : " ";
  const corpo = erros >= 2 ? "|" : " ";
  const bracoEsq = erros >= 3 ? "/" : " ";
  const bracoDir = erros >= 4 ? "\\" : " ";
  const pernaEsq = erros >= 5 ? "/" : " ";
  const pernaDir = erros >= 6 ? "\\" : " ";

  return (
    " +---+\n" +
    " |   |\n" +
    " |   " + cabeca + "\n" +
    " |  " + bracoEsq + corpo + bracoDir + "\n" +
    " |  " + pernaEsq + " " + pernaDir + "\n" +
    " |\n" +
    "=========\n"
  );
}
