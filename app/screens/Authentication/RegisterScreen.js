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
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const RegisterScreen = () => {
  // simulate an asynchronous API call
  const onSubmit = async () =>
    await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Screen>
      <ProductHeader title={"Register"} style={styles.header} />
      <AppText style={styles.description}>
        Please enter your personal details
      </AppText>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <AppText style={{ fontWeight: "bold" }}>Personal information</AppText>
        <FormTextInput name="firstName" rules={validation.firstName} />
        <FormTextInput name="lastName" rules={validation.lastName} />
        <FormTextInput name="email" rules={validation.email} />
        <FormTextInput
          name="password"
          rules={validation.password}
          secureTextEntry
        />
      </Form>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  description: {
    alignSelf: "center",
  },
  forgotPassword: {
    color: colors.primary,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
