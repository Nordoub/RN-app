import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import colors from "../shared/colors";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
});
