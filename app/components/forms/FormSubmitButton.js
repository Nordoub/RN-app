import React from "react";
import AppButton from "../AppButton";

const FormSubmitButton = ({ title, onPress, style }) => {
  return (
    <AppButton
      title={title}
      onPress={handleSubmit(onPress)}
      style={[styles.button, style]}
    />
  );
};

export default FormSubmitButton

const styles = StyleSheet.create({
    button: {
        width: "100%",
      },
})