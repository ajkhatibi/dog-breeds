import React, { useState, useEffect } from "react";
import data from "./breeds.json";
interface ResponseInterface {
  message: string;
  status: string;
}
export default function useFetchDogList(item: string) {
  const [response, setResponse] = useState<ResponseInterface | null>(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dog.ceo/api/breed/${item.toLocaleLowerCase()}/images/random`
        );
        const json = await res.json();
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
  return { response, error };
}
