import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import { findByTestAttr } from "../testUtils";

import { render } from "@testing-library/react-native";

/**
 * Factory function to create a ShallowWrapper for the ClearButton component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

describe("Test App Entry point", function () {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it("should render without error", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render the main App component without error", () => {
    const mainContainer = findByTestAttr(wrapper, "main-app-container");
    expect(mainContainer).toHaveLength(1);
  });

  //enzyme/jest
  it("should not render the AddMealBtn and ClearButton by default without user interaction", () => {
    wrapper = mount(<App />);
    const AddMealBtnInstance = findByTestAttr(wrapper, "add-meal-btn");
    const ClearButtonInstance = findByTestAttr(wrapper, "clear-meals-btn");
    const MealsListInstance = findByTestAttr(wrapper, "meals-list");
    expect(AddMealBtnInstance.length).toBe(0);
    expect(ClearButtonInstance.length).toBe(0);
    expect(MealsListInstance.length).toBe(0);
  });

  //react native test utils
  it("should render by default the MealTextInput, MealCaloriesInput and MealCaloriesTotal components", async () => {
    wrapper = render(<App />);
    const { findByPlaceholderText, findByText } = wrapper;

    const MealTextInputInstance = await findByPlaceholderText("Add meal Item");
    const MealCaloriesInputInstance = await findByPlaceholderText(
      "Add meal Calories"
    );
    const MealCaloriesTotal = await findByText("Total Calories:");
    expect(MealTextInputInstance).toBeTruthy();
    expect(MealCaloriesInputInstance).toBeTruthy();
    expect(MealCaloriesTotal).toBeTruthy();
  });
});
