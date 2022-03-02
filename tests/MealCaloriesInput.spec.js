import React from "react";
import { shallow } from "enzyme";
import { MealCaloriesInput } from "../MealCaloriesInput";
import App from "../App";

import { findByTestAttr } from "../testUtils";

import { render, fireEvent } from "@testing-library/react-native";

/**
 * Factory function to create a ShallowWrapper for the ClearButton component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<MealCaloriesInput />);
  return wrapper;
};

describe("Test MealCaloriesInput component", function () {
  let wrapper;

  it("should render without error", () => {
    wrapper = setup();
    expect(wrapper).toHaveLength(1);
  });

  it("should render the MealCaloriesInput component without error", () => {
    const mainContainer = findByTestAttr(wrapper, "meal-calories-input");
    expect(mainContainer).toHaveLength(1);
  });

  it("should make the AddMealBtn visible upon click", async () => {
    wrapper = render(<App />);
    const { findByPlaceholderText, findByText } = wrapper;
    const MealCaloriesInputInstance = await findByPlaceholderText(
      "Add meal Item"
    );
    //if we comment this, test breaks..
    fireEvent(MealCaloriesInputInstance, "onPressIn");
    const addMealBtnInstance = await findByText("Add Meal");
    expect(addMealBtnInstance).toBeTruthy();
  });
});
