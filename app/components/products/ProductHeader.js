import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Divider from "../Divider";
import HeaderText from "../text/HeaderText";

const ProductHeader = ({ title, style }) => {
  return (
    <View style={styles.container}>
      <Divider style={styles.divider} />
      <HeaderText style={[styles.headerText, style]} title={title} />
      <Divider style={styles.divider} />
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  divider: {
    backgroundColor: "black",
    flex: 1,
    marginHorizontal: 10,
  },
  headerText: {
    opacity: 0.5,
    fontWeight: "bold",
  },
});
