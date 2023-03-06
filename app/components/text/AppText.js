import React from "react";
import { Text } from "react-native";

import global from "../../shared/styles";

function AppText({ children, style }) {
  return <Text style={[global.text, style]}>{children}</Text>;
}

export default AppText;
