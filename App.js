import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import OnboardingScreen from "./app/screens/Onboarding/OnboardingScreen";
import WelcomeScreen from "./app/screens/Onboarding/WelcomeScreen";

export default function App() {
  return <OnboardingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
