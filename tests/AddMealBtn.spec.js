import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import { AddMealBtn } from "../AddMealBtn";
import App from "../App";
import { render, fireEvent } from "@testing-library/react-native";
import { findByTestAttr } from "../testUtils";
import { MealTextInput } from "../MealTextInput";

/**
 * Factory function to create a ShallowWrapper for the ClearButton component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  const wrapper = shallow(<AddMealBtn />);
  return wrapper;
};

describe("Test AddMealBtn component", function () {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it("should render without error", () => {
    wrapper = setup();
    expect(wrapper).toHaveLength(1);
  });

  it("should render the AddMealBtn component without error", () => {
    const btn = findByTestAttr(wrapper, "add-meal-btn");
    expect(btn).toHaveLength(1);
  });

  describe("AddMealBtn is initially hidden", () => {
    it("shoul not render AddMealBtn initially", () => {
      wrapper = mount(<App />);
      const btn = findByTestAttr(wrapper, "add-meal-btn");
      expect(btn).toHaveLength(0);
    });
  });

  describe("AddMealBtn is shown upon click inside 1 of the fields", () => {
    it("should render AddMealBtn after click on field", () => {
      //field
      const field = shallow(<MealTextInput />);
      //overwrite simulate method
      field.simulate = jest.fn(() => shallow(<AddMealBtn />));
      //simulate click
      const secondWrapper = field.simulate("click");
      //add btn check
      const addBtn = findByTestAttr(secondWrapper, "add-meal-btn");
      expect(addBtn).toHaveLength(1);
    });
  });

  describe("AddMealBtn is shown upon click inside 1 of the fields", () => {
    it("should render AddMealBtn after click on field", async () => {
      //render parent
      const wrapper = render(<App />);
      //destructure methods we need
      const { findByPlaceholderText, findByText } = wrapper;
      //grab field
      const fieldToClick = await findByPlaceholderText("Add meal Item");
      //simulate press event
      fireEvent(fieldToClick, "onPressIn");
      //grab button
      const addBtn = await findByText("Add Meal");
      //check btn exists after event (if we comment line 73 the test will fail)
      expect(addBtn).toBeTruthy();
    });
  });

  it("Upon click on AddMealBtn should add a meal item to the list of meals", async () => {
    //render parent
    const wrapper = render(<App />);
    //destructure methods we need
    const { findByPlaceholderText, findByText } = wrapper;
    //grab field
    const fieldToClick = await findByPlaceholderText("Add meal Item");
    //simulate press event to show add btn
    fireEvent(fieldToClick, "onPressIn");

    //grab name field
    const mealNameField = await findByPlaceholderText("Add meal Item");
    //fill name field
    fireEvent(mealNameField, "onChangeText", "some Meal Item");
    //grab calorie field
    const calorieField = await findByPlaceholderText("Add meal Calories");

    //fill calorieField
    fireEvent(calorieField, "onChangeText", "200");

    //grab  add button
    const addBtn = await findByText("Add Meal");

    // click button to add the meal
    fireEvent(addBtn, "onPress");

    //meals list shows only once a meal has been added
    const mealsList = await findByText("Meals List Here:");

    expect(mealsList).toBeTruthy();
  });
});
