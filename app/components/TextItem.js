import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./Text";
import fontSizes from "../shared/fontSizes";

const TextItem = ({
  title,
  description,
  titleStyle,
  descriptionStyle,
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text text={title} style={[$.text, titleStyle]} />
      {description && (
        <Text text={description} style={[$.description, descriptionStyle]} />
      )}
    </View>
  );
};

export default TextItem;

const $ = StyleSheet.create({
  text: {
    fontSize: fontSizes.sixteen,
    fontWeight: "300",
  },
  description: { fontSize: fontSizes.twelve, opacity: 0.3 },
});
