import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import Screen from "../components/Screen";
import MenuItems from "../components/ListItems/SettingsMenu/MenuItems";
import { AntDesign } from "@expo/vector-icons";

const ICON_SIZE = 24;

const appIcon = (
  <AntDesign name={"customerservice"} size={ICON_SIZE} color="blue" />
);
const siriIcon = <AntDesign name={"bars"} size={ICON_SIZE} color="blue" />;
const exportIcon = <AntDesign name={"star"} size={ICON_SIZE} color="blue" />;

const menuItems = [
  {
    title: "App Icon",
    leftIconComponent: appIcon,
  },
  {
    title: "Siri Shortcuts",
    leftIconComponent: siriIcon,
  },
  {
    title: "Export & Import",
    leftIconComponent: exportIcon,
  },
];

const SettingsScreen = () => {
  return (
    <Screen>
      <ScrollView>
        <MenuItems menuItems={menuItems} />
        <MenuItems menuItems={menuItems} />
        <MenuItems menuItems={menuItems} />
      </ScrollView>
    </Screen>
  );
};

export default SettingsScreen;

const $ = StyleSheet.create({});
