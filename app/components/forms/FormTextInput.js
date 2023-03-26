import { StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import AppTextInput from "../AppTextInput";
import { formatPlaceholder } from "../../shared/utils";
import errorMessages from "../../shared/errors";
import AppText from "../AppText";
import AppButton from "../AppButton";
import ErrorMessage from "../ErrorMessage";

const FormTextInput = ({ name, control, rules = {}, ...otherProps }) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <AppTextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={formatPlaceholder(name)}
            {...otherProps}
          />
          {error && <ErrorMessage error={error.message}/>}
        </>
      )}
      name={name}
    />
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
