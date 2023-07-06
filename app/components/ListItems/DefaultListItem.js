import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Divider from "../Divider";
import TextItem from "../TextItem";


const DefaultListItem = ({
  title,
  description,
  leftIconComponent,
  rightIconComponent,
  isLast = false,
  containerStyle,
  titleStyle,
  descriptionStyle,
  dividerStyle,
}) => {
  return (
    <>
      <TouchableOpacity style={[$.container, containerStyle]}>
        <View style={$.iconText}>
          {leftIconComponent}
          <TextItem
            title={title}
            description={description}
            containerStyle={$.textContainer}
            titleStyle={titleStyle}
            descriptionStyle={descriptionStyle}
          />
        </View>
        {rightIconComponent}
      </TouchableOpacity>
      {!isLast && <Divider style={dividerStyle} />}
    </>
  );
};

export default DefaultListItem;

const $ = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 20,
  },
  iconLeft: {
    marginRight: 20,
  },
  iconRight: {
    opacity: 0.3,
  },
});
