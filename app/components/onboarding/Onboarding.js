import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../Screen";
import Logo from "../Logo";
import AppButton from "../AppButton";
import HeaderText from "../text/HeaderText";
import AppText from "../AppText";
import ProgressSteps from "../indicators/ProgressSteps";
import ProductHeader from "../products/ProductHeader";

const Onboarding = ({ content }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const flashListRef = useRef(null);
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    flashListRef.current.scrollToOffset({
      animated: true,
      offset: currentStep * width,
    });
  }, [currentStep]);

  const next = () => setCurrentStep((step) => step + 1);
  const previous = () => setCurrentStep((step) => step - 1);
  const finish = () => navigation.navigate("Login");

  const NextButton = () => (
    <AppButton
      title={"Next >"}
      onPress={next}
      style={styles.nextButton}
      isSecondary
    />
  );
  const FinishButton = () => (
    <AppButton title={"Finish"} onPress={finish} style={styles.nextButton} />
  );
  const PrevButton = () => (
    <AppButton
      title={"< Previous"}
      onPress={previous}
      style={styles.prevButton}
      isSecondary
    />
  );

  return (
    <Screen style={styles.screen}>
      {/* <Logo source={require("../../../assets/logo.png")} style={styles.logo} /> */}
      <FlashList
        ref={flashListRef}
        renderItem={({ item }) => (
          <View
            style={{
              width,
              height,
              alignItems: "center",
              padding: 25,
            }}
          >
            {item.svg}
            <View
              style={{
                alignSelf: "center",
                // justifyContent: "center",
                // flex: 0.5,
              }}
            >
              <ProductHeader title={item.title} />
              <AppText>{item.description}</AppText>
            </View>
          </View>
        )}
        data={content}
        estimatedItemSize={content.length}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
      {currentStep === content.length - 1 ? <FinishButton /> : <NextButton />}
      {currentStep > 0 && <PrevButton />}
      <ProgressSteps
        totalSteps={content.length}
        currentStep={currentStep}
        style={styles.stepper}
      />
    </Screen>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  screen: {
    padding: 0,
  },
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
  logo: {
    alignSelf: "center",
    marginBottom: 50,
    width: 150,
  },
  stepper: {
    position: "absolute",
    bottom: 100,
  },
});
