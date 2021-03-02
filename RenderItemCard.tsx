import React, { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";
interface Props {
  item: string;
  key: number;
}
export default function RenderItemCard({ item, key }: Props) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dog.ceo/api/breed/${item}/images/random`
        );
        const json = await res.json();
        console.log("HI", json);
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <View>
      <Text key={key}>{item}</Text>
      <Image />
    </View>
  );
}
