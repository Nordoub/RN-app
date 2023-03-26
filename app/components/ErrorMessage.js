import { StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

const ErrorMessage = ({ error }) => {
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
