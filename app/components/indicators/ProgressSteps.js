import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../shared/colors";

const ProgressStep = ({ index, currentStep }) => {
  return (
    <View
      style={[
        styles.step,
        index <= currentStep ? styles.selectedStep : styles.unselectedStep,
      ]}
    ></View>
  );
};

const ProgressSteps = ({ totalSteps, currentStep, style }) => {
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <ProgressStep key={index} index={index} currentStep={currentStep} />
      ))}
    </View>
  );
};

export default ProgressSteps;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    // flex: 1,
  },
  step: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: colors.darkgrey,
    borderRadius: 100,
    margin: 5,
  },
  selectedStep: {
    backgroundColor: colors.primary,
  },
  unselectedStep: {
    backgroundColor: colors.darkgrey,
  },
});
