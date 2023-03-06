import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import global from "../shared/styles";
import colors from "../shared/colors";

const AppButton = ({ title, style, onPress, isSecondary = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isSecondary ? styles.secondaryButton : styles.primaryButton,
        style,
      ]}
    >
      <Text
        style={[
          global.text,
          isSecondary ? styles.secondaryText : styles.primaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 25,
    padding: 10,
    margin: 10,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  primaryText: {
    color: "white",
    fontWeight: "bold",
  },
  secondaryText: {
    color: colors.primary,
    fontWeight: "bold",
  },
});
