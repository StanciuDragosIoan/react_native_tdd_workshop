import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const MealsList = ({ itemsList }) => {
  const mealsOutput = itemsList.map((i) => (
    <View key={Math.random()}>
      <View style={styles.container}>
        <Text style={styles.kid}> {i.name}</Text>
        <Text style={styles.kid}>Calories: {i.cals}</Text>
      </View>
    </View>
  ));

  return (
    <View data-test="meals-list">
      {itemsList.length > 0 ? (
        <View>
          <View style={styles.container}>
            <Text>Meals List Here:</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.kidLabel}>Meal Item</Text>
            <Text style={styles.kidLabel}>Calories </Text>
          </View>
        </View>
      ) : null}
      {mealsOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  kid: {
    margin: 2,
    width: 150,
    borderWidth: 1,
    padding: 5,
  },
  kidLabel: {
    margin: 2,
    width: 150,
    padding: 5,
  },
  center: {
    alignItems: "center",
  },
});
