import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import { FlashList } from "@shopify/flash-list";
import WelcomeScreen from "./WelcomeScreen";

const screens = [<WelcomeScreen />, <WelcomeScreen />, <WelcomeScreen />];

const OnboardingScreen = () => {

  return (
      <FlashList
        renderItem={({ item }) => {
          return item;
        }}
        getItemType={({ item }) => {
          return item;
        }}
        data={screens}
        estimatedItemSize={3}
        horizontal
        pagingEnabled
      />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
