import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import AutoComplete from "./AutoComplete";
import data from "./breeds.json";
import RenderItemCard from "./RenderItemCard";

const findDogs = (query: string) => {
  if (query === "") {
    return [];
  }

  const regex = new RegExp(`${query.trim()}`, "i");
  return data.dogs.filter((item) => item.search(regex) >= 0);
};

export default function App() {
  const [query, setQuery] = useState("");
  const dogList = findDogs(query);
  const comp = (a: string, b: string) =>
    a.toLowerCase().trim() === b.toLowerCase().trim();
  return (
    <SafeAreaView style={styles.container}>
      <AutoComplete
        autoCorrect={false}
        autoCompleteType="off"
        autoCapitalize="none"
        placeholder="Start typing..."
        data={
          dogList.length === 1 && comp(query, dogList[0])
            ? []
            : dogList.slice(0, 4)
        }
        value={query}
        onChangeText={(text) => setQuery(text)}
        renderItem={({ item, index }) => {
          return <RenderItemCard item={item} />;
        }}
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
