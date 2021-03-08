import React from "react";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from "react-native";
const keyExtractor = (item: any, index: number) => `key-${index}`;
interface Props {
  value: string | undefined;
  onChangeText: (text: string) => void | undefined;
  autoCorrect: boolean | undefined;
  autoCompleteType:
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "email"
    | "name"
    | "password"
    | "postal-code"
    | "street-address"
    | "tel"
    | "username"
    | "off"
    | undefined;
  placeholder: string;
  data: readonly any[] | null | undefined;
  renderItem: ListRenderItem<any> | null | undefined;
  autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined;
}
export default function AutoComplete({
  value,
  onChangeText,
  autoCorrect,
  autoCompleteType,
  autoCapitalize,
  placeholder,
  data,
  renderItem,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          autoFocus
          autoCorrect={autoCorrect}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
        />
      </View>
      {value ? (
        <View>
          <FlatList
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            data={data}
            style={styles.list}
          />
        </View>
      ) : null}
    </View>
  );
}
const border = {
  borderColor: "#b9b9b9",
  borderRadius: 1,
  borderWidth: StyleSheet.hairlineWidth,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    ...border,
  },
  list: {
    ...border,
    backgroundColor: "white",
    borderTopWidth: 0,
    left: 0,
    position: "absolute",
    right: 0,
  },
  input: {
    height: 45,
  },
});
