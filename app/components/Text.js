import { StyleSheet, Text as RNtext } from "react-native";
import colors from "../shared/colors";
import fontSizes from "../shared/fontSizes";

const Text = ({ text, inverted = false, style }) => {
  return (
    <RNtext style={[$.text, inverted && $.inverted, style]}>{text}</RNtext>
  );
};

export default Text;

const $ = StyleSheet.create({
  text: {
    fontSize: fontSizes.normal,
  },
  inverted: {
    color: colors.inverted,
  },
});
