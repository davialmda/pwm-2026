import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import JogoDados from "@/components/JogoDados";

export default function Index() {
  return (
    <SafeAreaView style={styles.tela}>
      <JogoDados />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
});
