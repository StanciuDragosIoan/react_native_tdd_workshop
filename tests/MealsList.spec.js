import React from "react";
import { shallow, mount } from "enzyme";
import { MealsList } from "../MealsList";
import App from "../App";

import { findByTestAttr } from "../testUtils";

import { render, fireEvent } from "@testing-library/react-native";
const defaultProps = {
  itemsList: [],
};

/**
 * Factory function to create a ShallowWrapper for the ClearButton component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const allProps = { ...defaultProps, ...props };
  const wrapper = shallow(<MealsList {...allProps} />);
  return wrapper;
};

describe("Test MealsList component", function () {
  let wrapper;

  it("should render without error", () => {
    wrapper = setup();
    expect(wrapper).toHaveLength(1);
  });

  it("should render the MealsList component without error", () => {
    const mainContainer = findByTestAttr(wrapper, "meals-list");
    expect(mainContainer).toHaveLength(1);
  });

  it("MealsList component should not be rendered by default in the App component", () => {
    wrapper = mount(<App />);
    const mainContainer = findByTestAttr(wrapper, "meals-list");
    expect(mainContainer.length).toBe(0);
  });

  it("MealsList component should be rendered only once we add a meal", async () => {
    wrapper = render(<App />);
    const { findByPlaceholderText, findByText } = wrapper;
    const mealNameField = await findByPlaceholderText("Add meal Item");
    //simulate click in the field to show the add btn
    fireEvent(mealNameField, "onPressIn");
    //add item name
    fireEvent(mealNameField, "onChangeText", "some Meal Item");
    const calorieField = await findByPlaceholderText("Add meal Calories");
    //add item calories
    fireEvent(calorieField, "onChangeText", "200");
    const addMealBtn = await findByText("Add Meal");
    //add meal
    fireEvent(addMealBtn, "onPress");
    const MealsListInstance = await findByText("Meals List Here:");
    expect(MealsListInstance).toBeTruthy();
  });
});
