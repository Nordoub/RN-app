import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../shared/colors";
import AppTextInput from "./AppTextInput";

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={24}
        color={"grey"}
        style={styles.searchIcon}
      />
      <AppTextInput style={styles.textInput} placeholder={placeholder} />
      {/* <Feather name="x" size={24} color={"grey"} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.lightgrey,
    alignSelf: "center",
    padding: 10,
    borderRadius: 25,
    // borderColor: "black",
    // borderWidth: 1,
  },
  textInput: {
    flex: 1,
  },
  searchIcon: {
    paddingRight: 10,
  },
});

export default SearchBar;
