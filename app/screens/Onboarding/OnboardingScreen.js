import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Screen from "../../components/Screen";
import { FlashList } from "@shopify/flash-list";
import WelcomeScreen from "./WelcomeScreen";
import { useWindowDimensions } from "react-native";
import Logo from "../../components/Logo";
import AppButton from "../../components/AppButton";
import Onboarding from "../../components/onboarding/Onboarding";
import SvgFashion from "../../components/svg/SvgFashion";
import SvgShoppingBags from "../../components/svg/SvgShoppingBags";
import SvgConfirmed from "../../components/svg/SvgConfirmed";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const data = [
  {
    title: "Welcome!",
    description: lorem.repeat(9),
    svg: <SvgShoppingBags sizeInPercentage={"30%"} />,
  },
  {
    title: "Welcome!",
    description: lorem.repeat(3),
    svg: <SvgFashion sizeInPercentage={"30%"} />,
  },
  {
    title: "Welcome!",
    description: lorem.repeat(5),
    svg: <SvgConfirmed sizeInPercentage={"30%"} />,
  },
];

const OnboardingScreen = () => {
  return <Onboarding content={data} />;
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
