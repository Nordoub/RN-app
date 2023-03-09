import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText";
import colors from "../../shared/colors";

const ProductChip = ({ category, iconName }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* <MaterialCommunityIcons
        name={iconName}
        size={24}
        style={styles.icon}
        color={"silver"}
      /> */}
      <AppText style={styles.text}>{category}</AppText>
    </TouchableOpacity>
  );
};

export default ProductChip;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: colors.borderColor,
    borderWidth: 1,
    // backgroundColor: "dodgerblue",
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginRight: 8,
    // opacity: 0.5,
    overflow: "hidden",
  },
  text: {
    alignSelf: "center",
    // color: colors.beige,
    // fontWeight: "bold",
  },
  icon: {
    marginRight: 6,
  },
});
