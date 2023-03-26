import React from "react";
import { StyleSheet, View, ActivityIndicator as AC } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <AC size="large" color="#0000ff" />
    </View>
  );
}

export default ActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    opacity: 0.6,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
