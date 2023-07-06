import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Authentication/LoginScreen";
import RegisterScreen from "../screens/Authentication/RegisterScreen";
import WelcomeScreen from "../screens/Onboarding/WelcomeScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthStack from "./AuthStack";
import TabsNavigator from "./TabsNavigator";
import screenOptions from "../shared/screenOptions";

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={screenOptions}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
