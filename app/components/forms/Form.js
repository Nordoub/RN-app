import React from "react";
import { View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import colors from "../../shared/colors";
import AppButton from "../AppButton";

export default function Form({ initialValues, onSubmit, style, children }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  return (
    <View style={[styles.container, style]}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          control: control,
          errors: errors,
        })
      )}

      <AppButton
        title="Login"
        onPress={handleSubmit(onSubmit)}
        style={styles.submit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: colors.lightgrey,
    borderRadius: 25,
    fontSize: 18,
    padding: 15,
    marginBottom: 15,
  },
  submit: {
    width: "100%",
  },
});
