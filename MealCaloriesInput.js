import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const MealCaloriesInput = ({ handler, onChangeCals, calProp }) => {
  // const [calories, onChangeCalories] = React.useState("0");

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeCals}
      placeholder="Add meal Calories"
      keyboardType="default"
      data-test="meal-calories-input"
      onPressIn={() => handler()}
      value={calProp}
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
