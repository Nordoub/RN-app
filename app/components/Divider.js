import React from "react";
import { View } from "react-native";
import colors from "../shared/colors";

const Divider = () => {
  return (
    <View
      style={{
        borderBottomColor: colors.grey,
        borderBottomWidth: 2,
        // marginVertical: 5,
      }}
    />
  );
};

export default Divider;
