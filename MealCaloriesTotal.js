import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export const MealCaloriesTotal = ({ total }) => {
  return (
    <View data-test="meal-calories-total">
      <TouchableOpacity style={styles.button}>
        <Text>
          Total Calories:
          <Text style={styles.bold}> {total}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});
