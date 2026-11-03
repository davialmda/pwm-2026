import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Dado from "./Dado";

type BotaoProps = {
  titulo: string;
  onPress: () => void;
  desabilitado?: boolean;
};

function Botao({ titulo, onPress, desabilitado = false }: BotaoProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={desabilitado}
      style={({ pressed }) => [
        styles.botao,
        desabilitado && styles.botaoDesabilitado,
        pressed && !desabilitado && styles.botaoPressionado,
      ]}
    >
      <Text style={styles.textoBotao}>{titulo}</Text>
    </Pressable>
  );
}

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
    <View style={styles.container}>
      <Text style={styles.titulo}>Rodada {rodada} de 5</Text>

      <View style={styles.jogadores}>
        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>Jogador 1</Text>
          <View style={styles.dados}>
            <Dado valor={dado1Jogador1} />
            <Dado valor={dado2Jogador1} />
          </View>
          <Botao
            titulo="Jogar"
            onPress={jogarJogador1}
            desabilitado={jogador1Jogou || fimDeJogo}
          />
        </View>

        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>Jogador 2</Text>
          <View style={styles.dados}>
            <Dado valor={dado1Jogador2} />
            <Dado valor={dado2Jogador2} />
          </View>
          <Botao
            titulo="Jogar"
            onPress={jogarJogador2}
            desabilitado={!jogador1Jogou || jogador2Jogou || fimDeJogo}
          />
        </View>
      </View>

      {resultado !== "" && <Text style={styles.resultado}>{resultado}</Text>}

      <Text style={styles.placar}>Vitórias do Jogador 1: {vitoriasJogador1}</Text>
      <Text style={styles.placar}>Vitórias do Jogador 2: {vitoriasJogador2}</Text>

      {fimDeJogo && (
        <View style={styles.container}>
          <Text style={styles.resultadoFinal}>Fim de jogo!</Text>

          {vitoriasJogador1 > vitoriasJogador2 && (
            <Text style={styles.placar}>Jogador 1 venceu a partida!!</Text>
          )}

          {vitoriasJogador2 > vitoriasJogador1 && (
            <Text style={styles.placar}>Jogador 2 venceu a partida!!</Text>
          )}

          {vitoriasJogador1 === vitoriasJogador2 && (
            <Text style={styles.placar}>Empate geral!</Text>
          )}

          <Botao titulo="De novo!" onPress={jogarNovamente} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
  },
  jogadores: {
    flexDirection: "row",
    gap: 24,
  },
  jogador: {
    alignItems: "center",
    gap: 10,
  },
  nomeJogador: {
    fontSize: 20,
    fontWeight: "600",
  },
  dados: {
    flexDirection: "row",
    gap: 8,
  },
  resultado: {
    fontSize: 18,
    fontWeight: "600",
  },
  resultadoFinal: {
    fontSize: 22,
    fontWeight: "bold",
  },
  placar: {
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botaoDesabilitado: {
    backgroundColor: "#9ca3af",
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
