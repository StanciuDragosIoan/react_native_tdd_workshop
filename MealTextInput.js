import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const MealTextInput = ({ handler, onChangeMeal, valProp }) => {
  // const [meal, onChangeMeal] = React.useState("");

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeMeal}
      placeholder="Add meal Item"
      keyboardType="default"
      data-test="meal-text-input"
      onPressIn={() => handler()}
      value={valProp}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
