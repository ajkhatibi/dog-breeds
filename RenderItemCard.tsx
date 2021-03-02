import React, { useEffect, useState } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import data from "./breeds.json";

interface Props {
  item: string;
  key: number;
}
interface ResponseInterface {
  message: string;
  status: string;
}
export default function RenderItemCard({ item, key }: Props) {
  const [response, setResponse] = useState<ResponseInterface | null>(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dog.ceo/api/breed/${item.toLocaleLowerCase()}/images/random`
        );
        const json = await res.json();
        console.log("HI", json);
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    const doesItemExistInlist = data.dogs.find((element) => element === item);
    if (doesItemExistInlist !== undefined) {
      fetchData();
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text key={key}>{item}</Text>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: response?.message }}
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
