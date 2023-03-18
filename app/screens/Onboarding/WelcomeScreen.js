import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import HeaderText from "../../components/text/HeaderText";
import AppText from "../../components/AppText";
import Logo from "../../components/Logo";
import { useWindowDimensions } from "react-native";
import { getAllCategories } from "../../api/products";
import ProgressSteps from "../../components/indicators/ProgressSteps";
import { useNavigation } from "@react-navigation/native";

// const SubmitButton = ({ onPress }) => {
//   return (
//     <AppButton style={styles.nextButton} title="Finish" onPress={onPress} />
//   );
// };

// const NextButton = ({ onPress, index }) => {
//   return (
//     <AppButton
//       style={styles.nextButton}
//       title="Next >"
//       onPress={() => onPress(index + 1)}
//     />
//   );
// };
// const PrevButton = ({ onPress, index }) => (
//   <AppButton
//     style={styles.prevButton}
//     title="< Previous"
//     isSecondary
//     onPress={() => onPress(index - 1)}
//   />
// );

const WelcomeScreen = ({
  title,
  description,
  index,
  totalSteps,
  isFinalScreen,
  handleButtonPress,
}) => {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();

  const navigateToAuthScreen = () => navigation.navigate("Login");

  return (
    <View
      style={{
        height,
        width,
        paddingTop: 50,
        padding: 10,
      }}
    >
      {/* <Logo
        source={require("../../../assets/logo.png")}
        style={{ alignSelf: "center", marginBottom: 50 }}
      /> */}
      <View style={styles.text}>
        <HeaderText title={title} />
        <AppText style={{ textAlign: "center" }}>{description}</AppText>
      </View>

      {/* {isFinalScreen ? (
        <SubmitButton onPress={navigateToAuthScreen} />
      ) : (
        <NextButton onPress={handleButtonPress} index={index} />
      )}

      {index !== 0 && <PrevButton onPress={handleButtonPress} index={index} />} */}

      <ProgressSteps
        totalSteps={totalSteps}
        currentStep={index}
        style={styles.stepper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  prevButton: {
    position: "absolute",
    bottom: 40,
    left: 10,
    width: 100,
  },
  nextButton: {
    position: "absolute",
    bottom: 40,
    right: 10,
    width: 100,
  },
  stepper: {
    position: "absolute",
    bottom: 100,
  },
  text: {
    alignItems: "center",
  },
});
export default WelcomeScreen;
