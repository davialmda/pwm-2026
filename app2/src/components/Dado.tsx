import { Image, StyleSheet } from "react-native";

const imagens: Record<number, any> = {
  1: require("../../assets/images/1.png"),
  2: require("../../assets/images/2.png"),
  3: require("../../assets/images/3.png"),
  4: require("../../assets/images/4.png"),
  5: require("../../assets/images/5.png"),
  6: require("../../assets/images/6.png"),
};

type Props = {
  valor: number;
};

export default function Dado({ valor }: Props) {
  return (
    <Image
      source={imagens[valor]}
      style={styles.dado}
      accessibilityLabel={`Dado com valor ${valor}`}
    />
  );
}

const styles = StyleSheet.create({
  dado: {
    width: 70,
    height: 70,
  },
});
