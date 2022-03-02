import React from "react";
import { shallow, mount } from "enzyme";
import { ClearButton } from "../ClearButton";

import { findByTestAttr, checkProps } from "../testUtils";
import App from "../App";

import { render, fireEvent } from "@testing-library/react-native";
const defaultProps = {
  variant: "blue",
};

/**
 * Factory function to create a ShallowWrapper for the ClearButton component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const allProps = { ...defaultProps, ...props };
  const wrapper = shallow(<ClearButton {...allProps} />);
  return wrapper;
};

describe("Test ClearButton component", function () {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it("should render without error", () => {
    wrapper = setup();
    expect(wrapper).toHaveLength(1);
  });

  it("should not throw error with expected props (string)", () => {
    wrapper = mount(<ClearButton variant="blue" />);
    expect(wrapper.props().variant).toBe("blue");
    checkProps(ClearButton, { variant: "blue" });
  });

  it("should render the ClearButton component without error", () => {
    const mainContainer = findByTestAttr(wrapper, "clear-meals-btn");
    expect(mainContainer).toHaveLength(1);
  });

  it("App component should initiall not render the ClearButton component without error", () => {
    wrapper = mount(<App />);
    const mainContainer = findByTestAttr(wrapper, "clear-meals-btn");
    //for some reason react-native reads more than 1 node when renders comp / possibly renders multiple times?
    expect(mainContainer.length).toBe(0);
  });

  it("the ClearButton component should be rendered only once we add 1 meal", async () => {
    //render parent
    const wrapper = render(<App />);

    //destructure methods we need
    const { findByPlaceholderText, findByText } = wrapper;
    //grab name field
    const mealNameField = await findByPlaceholderText("Add meal Item");
    //fill name field
    fireEvent(mealNameField, "onChangeText", "some Meal Item");
    //grab calorie field
    const calorieField = await findByPlaceholderText("Add meal Calories");
    //click calorieField so addBtn shows up
    fireEvent(calorieField, "onPressIn");
    //fill calorieField
    fireEvent(calorieField, "onChangeText", "200");
    //grab AddMealBtn
    const addMealBtn = await findByText("Add Meal");
    //click button to add the meal
    fireEvent(addMealBtn, "onPress");
    //check clearBtn now exists
    const clearBtn = await findByText("Clear Meals");
    //assert
    expect(clearBtn).toBeTruthy();
  });

  it("should clear the meals and make the MealsList component disappear upon click", async () => {
    const wrapper = render(<App />);
    const { findByPlaceholderText, findByText } = wrapper;
    //grab name field
    const mealNameField = await findByPlaceholderText("Add meal Item");
    //fill name field
    fireEvent(mealNameField, "onChangeText", "some Meal Item");
    //grab calorie field
    const calorieField = await findByPlaceholderText("Add meal Calories");
    //click calorieField so addBtn shows up
    fireEvent(calorieField, "onPressIn");
    //fill calorieField
    fireEvent(calorieField, "onChangeText", "200");
    //grab AddMealBtn
    const addMealBtn = await findByText("Add Meal");
    //click button to add the meal
    fireEvent(addMealBtn, "onPress");
    //check clearBtn now exists
    const clearBtn = await findByText("Clear Meals");

    //check that MealsList and ClearButtom exists now as we have 1 meal added
    const mealsList = await findByText("Meals List Here:");
    expect(mealsList).toBeTruthy();
    expect(clearBtn).toBeTruthy();
    //clear meals
    fireEvent(clearBtn, "onPress");
    let errFailGetList = false;
    try {
      //list is hidden, this will fail
      const mealsList = await findByText("Meals List Here:");
    } catch (err) {
      //boo, list not found
      errFailGetList = true;
    }

    //assert err = true
    expect(errFailGetList).toBe(true);
  });
});
