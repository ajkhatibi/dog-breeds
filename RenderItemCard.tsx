import React from "react";
import { Text, Image, View, StyleSheet, ActivityIndicator } from "react-native";
import useFetchDogList from "./useFetchDogList";
interface Props {
  item: string;
}

export default function RenderItemCard({ item }: Props) {
  const response = useFetchDogList(item);

  return (
    <View key={item} style={styles.container}>
      <Text style={styles.text}>{item}</Text>
      {response.response ? (
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: response.response?.message }}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    width: 100,
  },
});
