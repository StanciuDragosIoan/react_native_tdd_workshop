import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AddMealBtn } from "./AddMealBtn";
import { MealTextInput } from "./MealTextInput";
import { MealCaloriesInput } from "./MealCaloriesInput";
import { useState, useEffect } from "react";
import { ClearButton } from "./ClearButton";
import { MealCaloriesTotal } from "./MealCaloriesTotal";
import { MealsList } from "./MealsList";

/**
 * @function App
 * @returns {App} App component instance
 */
export default function App() {
  //state
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [cals, setCals] = useState("");
  const [meals, setMeals] = useState([]);
  const [total, setTotal] = useState(0);

  //handlers
  const getTotalCals = (newMeals) => {
    let totalCals = newMeals
      .map((item) => parseInt(item.cals))
      .reduce((prev, curr) => prev + curr, 0);

    setTotal(totalCals);
  };

  const clearMeals = () => {
    setMeals([]);
    setTotal(0);
  };

  const setMealNameHandler = (event) => {
    setName(event);
  };

  const setMealCalsHandler = (val) => {
    setCals(val);
  };

  const setShowTrue = () => {
    setShow(true);
  };

  const grabMealHandler = () => {
    const meal = {
      name,
      cals,
    };
    const newMeals = [...meals, meal];
    setMeals(newMeals);

    getTotalCals(newMeals);
    setName("");
    setCals(0);
  };

  return (
    <View style={styles.container} data-test="main-app-container">
      {meals.length > 0 && <ClearButton variant="blue" handler={clearMeals} />}
      <View style={styles.fieldsContainer}>
        <MealTextInput
          id="name"
          onChangeMeal={setMealNameHandler}
          handler={() => setShowTrue()}
          valProp={name}
        />
        <MealCaloriesInput
          onChangeCals={setMealCalsHandler}
          id="cals"
          handler={() => setShowTrue()}
          calProp={cals.toString()}
        />
      </View>
      <StatusBar style="auto" />
      {meals.length > 0 && <MealsList itemsList={meals} />}

      {show && <AddMealBtn grabMealHandler={grabMealHandler} />}

      <MealCaloriesTotal total={total} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fieldsContainer: {
    flexDirection: "row",
  },
});
