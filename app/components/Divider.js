import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Divider = ({style}) => {
  return <View style={[$.line, style]}></View>;
};

export default Divider;

const $ = StyleSheet.create({
  line: {
    borderWidth: 0.5,
    opacity: 0.3,
    borderColor: "grey",
    marginHorizontal: 20,
  },
});
