import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
export const ClearButton = ({ variant, handler }) => {
  return (
    <View data-test="clear-meals-btn">
      <TouchableOpacity
        onPress={handler}
        style={variant === "blue" ? styles.variantBlue : styles.button}
      >
        <Text style={variant === "blue" ? styles.btnTextBlue : styles.btnText}>
          Clear Meals
        </Text>
      </TouchableOpacity>
    </View>
  );
};

ClearButton.propTypes = {
  variant: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  variantBlue: {
    backgroundColor: "blue",
    padding: 15,
    color: "#fff",
  },
  btnTextBlue: {
    color: "#fff",
  },
  btnText: {
    color: "#000",
  },
});
