import React from "react";
import { shallow, mount } from "enzyme";
import { MealTextInput } from "../MealTextInput";

import { findByTestAttr } from "../testUtils";

import App from "../App";

import { render } from "@testing-library/react-native";

/**
 * Factory function to create a ShallowWrapper for the ClearButton component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<MealTextInput />);
  return wrapper;
};

describe("Test MealTextInput component", function () {
  let wrapper;

  it("should render without error", () => {
    wrapper = setup();
    expect(wrapper).toHaveLength(1);
  });

  it("should render the MealTextInput component without error", () => {
    const mainContainer = findByTestAttr(wrapper, "meal-text-input");
    expect(mainContainer).toHaveLength(1);
  });

  //this works bad with jest/enzyme as it returns a node of more than 1 elements (weird way in which stuff is rendered by react native)
  // it("MealTextInput component should be rendered in the App component by default", () => {
  //   wrapper = mount(<App />);
  //   const MealTextInputInstance = findByTestAttr(wrapper, "meal-text-input");
  //   expect(MealTextInputInstance.length).toBe(1);
  // });

  //better approach with react native test utils
  it("MealTextInput component should be rendered in the App component by default", async () => {
    wrapper = render(<App />);
    const { findByPlaceholderText } = wrapper;
    const MealTextInput = await findByPlaceholderText("Add meal Item");
    expect(MealTextInput).toBeTruthy();
  });
});
