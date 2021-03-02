import React, { useEffect, useState } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import useFetchDogList from "./useFetchDogList";
interface Props {
  item: string;
  key: number;
}

export default function RenderItemCard({ item, key }: Props) {
  const response = useFetchDogList(item);

  return (
    <View style={styles.container}>
      <Text key={key}>{item}</Text>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: response.response?.message }}
      />
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
});
