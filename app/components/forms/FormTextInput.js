import { StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import AppTextInput from "../AppTextInput";
import { formatPlaceholder } from "../../shared/utils";
import ErrorMessage from "../ErrorMessage";
import colors from "../../shared/colors";

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
            containerStyle={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={formatPlaceholder(name)}
            {...otherProps}
          />
          {error && <ErrorMessage error={error.message} />}
        </>
      )}
      name={name}
    />
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.darkgrey,
    padding: 15,
    marginVertical: 5,
  },
  error: {
    color: "red",
  },
});
