import { StyleSheet } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import Form from "../../components/forms/Form";
import FormTextInput from "../../components/forms/FormTextInput";
import ProductHeader from "../../components/products/ProductHeader";
import AppText from "../../components/AppText";
import validation from "../../shared/validation";
import colors from "../../shared/colors";
import AppButton from "../../components/AppButton";

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  // simulate an asynchronous API call
  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigation.navigate("Main", { screen: "Home" });
  };
  return (
    <Screen>
      <ProductHeader title={"Welcome back!"} />
      <AppText style={styles.description}>
        We are happy to have you back!
      </AppText>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <AppText style={{ fontWeight: "bold" }}>Account information</AppText>
        <FormTextInput name="email" rules={validation.email} />
        <FormTextInput
          name="password"
          rules={validation.password}
          secureTextEntry
        />
        <AppButton
          title="Forgot password?"
          onPress={() => navigation.navigate("Register")}
          style={styles.forgotPassword}
          isSecondary
        />
      </Form>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  description: {
    alignSelf: "center",
  },
  forgotPassword: {
    color: colors.primary,
    backgroundColor: colors.background,
    fontWeight: "bold",
    alignSelf: "center",
    borderWidth: 0,
    margin: 0,
  },
});
