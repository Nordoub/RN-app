import React from "react";
import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import AppButton from "../AppButton";
import ActivityIndicator from "../ActivityIndicator";

export default function Form({
  initialValues,
  onSubmit,
  buttonTitle = "Submit",
  style,
  children,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValues,
  });

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator visible={isSubmitting} />
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          control: control,
          errors: errors,
        })
      )}

      <AppButton
        title={buttonTitle}
        onPress={handleSubmit(onSubmit)}
        style={styles.submit}
        disabled={isSubmitting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "center",
  },
  submit: {
    width: "100%",
  },
});
