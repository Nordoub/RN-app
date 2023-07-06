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
      <AppTextInput textStyle={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // width: "100%",
    flex: 1,
    backgroundColor: "white",
    // borderWidth: 0.5,
    borderColor: "lightgrey",
    alignSelf: "center",
    padding: 5,
    marginHorizontal: 0,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 16,
  },
  searchIcon: {
    paddingRight: 10,
  },
});

export default SearchBar;
