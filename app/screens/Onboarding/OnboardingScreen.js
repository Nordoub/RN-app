import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Screen from "../../components/Screen";
import { FlashList } from "@shopify/flash-list";
import WelcomeScreen from "./WelcomeScreen";
import Logo from "../../components/Logo";
import AppButton from "../../components/AppButton";
import Onboarding from "../../components/onboarding/Onboarding";
import SvgFashion from "../../components/svg/SvgFashion";
import SvgShoppingBags from "../../components/svg/SvgShoppingBags";
import SvgConfirmed from "../../components/svg/SvgConfirmed";
import ShoppingSVG from "../../../assets/svg/shopping.svg";
import OrderConfirmedSVG from "../../../assets/svg/order_confirmed.svg";
import PurchaseSVG from "../../../assets/svg/successful_purchase.svg";
import strings from "../../shared/strings";

const data = [
    {
      title: "Welcome!",
      description: strings.onboarding_select_clothes,
      svg: <ShoppingSVG height={200} />,
    },
    {
      title: "Confirm order",
      description: strings.onboarding_confirm_order,
      svg: <OrderConfirmedSVG height={200} />,
    },
    {
      title: "Enjoy!",
      description: strings.onboarding_finalize_order,
      svg: <PurchaseSVG height={200} />,
    }]

const OnboardingScreen = () => {
  return <Onboarding content={data} />;
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
