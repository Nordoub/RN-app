import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import global from "../shared/styles";

const AppText = ({ children, style, ...props }) => {
  return (
    <Text style={[global.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({});
