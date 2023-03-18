import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import AppTextInput from "../AppTextInput";
import { capitalize, formatPlaceholder } from "../../shared/utils";
import errorMessages from "../../shared/errors";
import AppText from "../AppText";

const FormTextInput = ({ name, control, errors, rules, ...otherProps }) => {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={formatPlaceholder(name)}
            {...otherProps}
          />
        )}
        name={name}
      />
      {errors[name] && (
        <AppText style={styles.error}>{errorMessages[name]}</AppText>
      )}
    </>
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
