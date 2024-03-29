import { StyleSheet, Text, View } from "react-native";
import NavigationStack from "./app/navigation/NavigationStack";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return <NavigationStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
