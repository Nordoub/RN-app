import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import HomeScreen from "./app/screens/HomeScreen";
import OnboardingScreen from "./app/screens/Onboarding/OnboardingScreen";
import WelcomeScreen from "./app/screens/Onboarding/WelcomeScreen";

export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
