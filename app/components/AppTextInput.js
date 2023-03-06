import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import global from "../shared/styles";

const AppTextInput = ({ children, style, ...props }) => {
  return (
    <TextInput style={[global.text, style]} {...props}>
      {children}
    </TextInput>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
