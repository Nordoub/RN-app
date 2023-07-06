import { StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { AntDesign } from "@expo/vector-icons";

import DefaultListItem from "../DefaultListItem";

const ICON_SIZE = 24;

const MenuItem = ({ title, leftIconComponent, isLast = false }) => {
  const rightIconComponent = useMemo(
    () => <AntDesign name="right" size={ICON_SIZE} color="lightgrey" />,
    [ICON_SIZE]
  );

  return (
    <DefaultListItem
      title={title}
      leftIconComponent={leftIconComponent}
      rightIconComponent={rightIconComponent}
      isLast={isLast}
    />
  );
};

export default React.memo(MenuItem);

const $ = StyleSheet.create({
  iconRight: {
    opacity: 0.3,
  },
});
