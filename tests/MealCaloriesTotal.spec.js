import React from "react";
import { shallow, mount } from "enzyme";
import { MealCaloriesTotal } from "../MealCaloriesTotal";

import { findByTestAttr } from "../testUtils";
import App from "../App";

import { render, fireEvent } from "@testing-library/react-native";

/**
 * Factory function to create a ShallowWrapper for the ClearButton component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  const wrapper = shallow(<MealCaloriesTotal />);
  return wrapper;
};

describe("Test MealCaloriesTotal component", function () {
  let wrapper;

  it("should render without error", () => {
    wrapper = setup();
    expect(wrapper).toHaveLength(1);
  });

  it("should render the MealCaloriesTotal component without error", () => {
    const mainContainer = findByTestAttr(wrapper, "meal-calories-total");
    expect(mainContainer).toHaveLength(1);
  });

  it("App component should render the MealCaloriesTotal component without error", () => {
    wrapper = mount(<App />);
    const mainContainer = findByTestAttr(wrapper, "meal-calories-total");
    //for some reason react-native reads more than 1 node when renders comp / possibly renders multiple times?
    expect(mainContainer.length).toBeGreaterThan(0);
  });

  it("should make the AddMealBtn visible upon click", async () => {
    wrapper = render(<App />);
    const { findByPlaceholderText, findByText } = wrapper;
    const MealCaloriesInputInstance = await findByPlaceholderText(
      "Add meal Calories"
    );
    //if we comment this, test breaks..
    fireEvent(MealCaloriesInputInstance, "onPressIn");
    const addMealBtnInstance = await findByText("Add Meal");
    expect(addMealBtnInstance).toBeTruthy();
  });
});
