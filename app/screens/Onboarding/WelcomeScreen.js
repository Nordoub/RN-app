import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import HeaderText from "../../components/text/HeaderText";
import AppText from "../../components/text/AppText";
import Logo from "../../components/Logo";
import { useWindowDimensions } from "react-native";
import {getAllCategories} from "../../api/products";

const WelcomeScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    <View
      style={{
        justifyContent: "space-evenly",
        height,
        width,
      }}
    >
      <Logo
        source={require("../../../assets/logo.png")}
        style={{ alignSelf: "center" }}
      />
      <View style={{ alignItems: "center" }}>
        <HeaderText title={"Welcome!"} />
        <AppText style={{ textAlign: "center" }}>
          Take a quick tour to see what you can do with RN-app.
        </AppText>
      </View>
      <View>
        <AppButton title="Great, let's go" onPress={getAllCategories}/>
        <AppButton title="No thanks" isSecondary />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default WelcomeScreen;
