import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import data from "./breeds.json";

const findDogs = (query) => {
  if (query === "") {
    return [];
  }

  const regex = new RegExp(`${query.trim()}`, "i");
  return data.dogs.filter((item) => item.search(regex) >= 0);
};

export default function App() {
  const [query, setQuery] = useState("");
  const dogList = findDogs(query);
  const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
  return (
    <SafeAreaView style={styles.container}>
      <Autocomplete
        placeholder="Start typing..."
        data={dogList.length === 1 && comp(query, dogList[0]) ? [] : dogList}
        defaultValue={query}
        onChangeText={(text) => setQuery(text)}
        renderItem={({ item, i }) => <Text key={i}>{item}</Text>}
      />
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
