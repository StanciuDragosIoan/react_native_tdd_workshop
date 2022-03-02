import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export const AddMealBtn = ({ grabMealHandler }) => {
  const [count, setCount] = useState(0);

  return (
    <View data-test="add-meal-btn">
      <TouchableOpacity style={styles.button} onPress={grabMealHandler}>
        <Text>Add Meal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
});
