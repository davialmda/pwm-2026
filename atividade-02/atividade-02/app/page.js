"use client";

import { useState } from "react";

export default function Home() {
  const [jogador1, setJogador1] = useState(0);
  const [jogador2, setJogador2] = useState(0);

  function jogar() {
    setJogador1(Math.floor(Math.random() * 6) + 1);
    setJogador2(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div>
      <h1>Jogo de Dados</h1>

      <p>Jogador 1: {jogador1}</p>
      <p>Jogador 2: {jogador2}</p>

      <button onClick={jogar}>Jogar</button>
    </div>
  );
}