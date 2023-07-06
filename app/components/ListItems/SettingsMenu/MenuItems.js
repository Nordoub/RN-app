import { StyleSheet, View } from "react-native";
import React from "react";
import MenuItem from "./MenuItem";
import borderRadius from "../../../shared/borderRadius";

const MenuItems = ({ menuItems }) => {
  return (
    <View style={$.container}>
      {menuItems.map((menuItem, index) => (
        <MenuItem
          key={index}
          title={menuItem.title}
          leftIconComponent={menuItem.leftIconComponent}
          isLast={menuItems.length === index + 1}
        />
      ))}
    </View>
  );
};

export default MenuItems;

const $ = StyleSheet.create({
  container: {
    borderRadius: borderRadius.default,
    // borderWidth: 1,
    // borderColor: "#e4f2ed",
    backgroundColor: "white",
    margin: 10,
    paddingVertical: 5,
  },
});
