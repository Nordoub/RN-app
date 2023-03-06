import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Logo = ({ source, style }) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={[styles.logo, style]} // You can change the default width and height here
        // resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
  },
});
export default Logo;
