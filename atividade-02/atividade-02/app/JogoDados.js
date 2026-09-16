"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {

  const [rodada, setRodada] = useState(1);

  const [dado1Jogador1, setDado1Jogador1] = useState(1);
  const [dado2Jogador1, setDado2Jogador1] = useState(1);

  const [dado1Jogador2, setDado1Jogador2] = useState(1);
  const [dado2Jogador2, setDado2Jogador2] = useState(1);

  const [jogador1Jogou, setJogador1Jogou] = useState(false);
  const [jogador2Jogou, setJogador2Jogou] = useState(false);

  const [resultado, setResultado] = useState("");

  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);

  const [fimDeJogo, setFimDeJogo] = useState(false);


  function jogarJogador1() {

    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    setDado1Jogador1(dado1);
    setDado2Jogador1(dado2);

    setJogador1Jogou(true);
  }


  function jogarJogador2() {

    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    setDado1Jogador2(dado1);
    setDado2Jogador2(dado2);

    const somaJogador1 = dado1Jogador1 + dado2Jogador1;
    const somaJogador2 = dado1 + dado2;

    if (somaJogador1 > somaJogador2) {
      setResultado("Jogador 1 venceu!");
      setVitoriasJogador1(vitoriasJogador1 + 1);
    } else if (somaJogador2 > somaJogador1) {
      setResultado("Jogador 2 venceu!");
      setVitoriasJogador2(vitoriasJogador2 + 1);
    } else {
      setResultado("Empate!");
    }

    setJogador2Jogou(true);

    if (rodada === 5) {
      setFimDeJogo(true);
    } else {
      setRodada(rodada + 1);
      setJogador1Jogou(false);
      setJogador2Jogou(false);
    }
  }


  function jogarNovamente() {

    setRodada(1);

    setDado1Jogador1(1);
    setDado2Jogador1(1);

    setDado1Jogador2(1);
    setDado2Jogador2(1);

    setJogador1Jogou(false);
    setJogador2Jogou(false);

    setResultado("");

    setVitoriasJogador1(0);
    setVitoriasJogador2(0);

    setFimDeJogo(false);
  }


  return (
    <div>

      <h1>Jogo de Dados</h1>

      <h2>Rodada {rodada} de 5</h2>


      <h3>Jogador 1</h3>

      <Dado valor={dado1Jogador1} />
      <Dado valor={dado2Jogador1} />

      <br />

      <button
        onClick={jogarJogador1}
        disabled={jogador1Jogou || fimDeJogo}
      >
        Jogar Jogador 1
      </button>


      <h3>Jogador 2</h3>

      <Dado valor={dado1Jogador2} />
      <Dado valor={dado2Jogador2} />

      <br />

      <button
        onClick={jogarJogador2}
        disabled={!jogador1Jogou || jogador2Jogou || fimDeJogo}
      >
        Jogar Jogador 2
      </button>


      <h2>{resultado}</h2>

      <p>Vitórias do Jogador 1: {vitoriasJogador1}</p>
      <p>Vitórias do Jogador 2: {vitoriasJogador2}</p>


      {fimDeJogo && (
        <div>

          <h2>Fim de jogo!</h2>

          {vitoriasJogador1 > vitoriasJogador2 && (
            <p>Jogador 1 venceu a partida!!</p>
          )}

          {vitoriasJogador2 > vitoriasJogador1 && (
            <p>Jogador 2 venceu a partida!!</p>
          )}

          {vitoriasJogador1 === vitoriasJogador2 && (
            <p>Empate geral!</p>
          )}

          <button onClick={jogarNovamente}>
            De novo!
          </button>

        </div>
      )}

    </div>
  );
}