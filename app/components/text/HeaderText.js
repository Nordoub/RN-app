import { StyleSheet, Text, View } from "react-native";
import React from "react";
import global from "../../shared/styles";
import AppText from "../AppText";

const HeaderText = ({ title, style }) => {
  return (
    <View>
      <AppText style={[styles.header, style]}>{title}</AppText>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    // fontWeight: "bold",
  },
});
