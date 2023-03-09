import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors: colors,
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
