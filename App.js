import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BadComponent1 from "./src/components/BadComponent1.js";
import BadComponent2 from "./src/components/BadComponent2.js";
import BadComponent3 from "./src/components/BadComponent3.js";

export default function App() {
  return (
    <View style={styles.container}>
      <BadComponent1 />
      <BadComponent2 />
      <BadComponent3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
