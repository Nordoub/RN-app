import { StyleSheet } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import Form from "../../components/forms/Form";
import FormTextInput from "../../components/forms/FormTextInput";
import ProductHeader from "../../components/products/ProductHeader";
import AppText from "../../components/AppText";
import validation from "../../shared/validation";
import colors from "../../shared/colors";

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  // simulate an asynchronous API call
  const onSubmit = async () =>
    await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Screen>
      <ProductHeader title={"Welcome back!"} style={styles.header} />
      <AppText style={styles.description}>
        We are happy to have you back!
      </AppText>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        style={styles.form}
      >
        <AppText style={{ fontWeight: "bold" }}>Account information</AppText>
        <FormTextInput name="email" rules={validation.email} />
        <FormTextInput
          name="password"
          rules={validation.password}
          secureTextEntry
        />
        <AppText style={styles.forgotPassword}>Forgot password?</AppText>
      </Form>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  form: {
    flex: 0.8,
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
  },
  description: {
    alignSelf: "center",
  },
  forgotPassword: {
    color: colors.primary,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
