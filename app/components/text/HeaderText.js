import { StyleSheet, Text, View } from "react-native";
import React from "react";
import global from "../../shared/styles";

const HeaderText = ({ title, style }) => {
  return (
    <View>
      <Text style={[global.text, styles.header, style]}>{title}</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
