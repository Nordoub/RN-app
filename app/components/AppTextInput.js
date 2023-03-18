import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import global from "../shared/styles";
import colors from "../shared/colors";
import { Entypo } from "@expo/vector-icons";

const AppTextInput = ({
  children,
  style,
  secureTextEntry = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const toggle = () => setShowPassword((value) => !value);

  return (
    <View style={styles.container}>
      <TextInput
        style={[global.text, styles.textInput, style]}
        {...props}
        secureTextEntry={showPassword}
      >
        {children}
      </TextInput>
      {secureTextEntry && !showPassword && (
        <Entypo
          name="eye-with-line"
          size={24}
          color={colors.verydarkgrey}
          style={styles.icon}
          onPress={toggle}
        />
      )}
      {secureTextEntry && showPassword && (
        <Entypo
          name="eye"
          size={24}
          color={colors.verydarkgrey}
          style={styles.icon}
          onPress={toggle}
        />
      )}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "green",
    backgroundColor: colors.darkgrey,
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  textInput: {
    width: "100%",
    // backgroundColor: colors.grey,
    // padding: 15,
    // marginVertical: 5,
    // borderRadius: 7,
  },
  icon: {
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
});
