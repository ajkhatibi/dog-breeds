import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Type Here..." value={"search"} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
