import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../shared/colors";
import HeaderText from "../text/HeaderText";
import AppText from "../AppText";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = ({ imgUrl, title, description, price }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: imgUrl,
        }}
      />
      <View style={styles.textContainer}>
        <AppText
          style={{
            opacity: 0.7,
            fontWeight: "bold",
            fontSize: 12,
            paddingBottom: 5,
          }}
        >
          {title}
        </AppText>
        <AppText numberOfLines={3} style={{ opacity: 0.4, fontSize: 12 }}>
          {description}
        </AppText>
        <AppText style={styles.price}>{"€" + price + ",-"}</AppText>
      </View>
      <AntDesign
        name="pluscircle"
        size={28}
        color={colors.primary}
        style={styles.addIcon}
      />
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "49%",
    borderColor: "cyan",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    // padding: 10,
  },
  img: {
    width: 120,
    aspectRatio: 1,
    resizeMode: "contain",
    marginVertical: 5,
    marginBottom: 15,
  },
  textContainer: {
    backgroundColor: "cyan",
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  price: {
    fontWeight: "900",
    color: "red",
    fontSize: 20,
    marginTop: 20,
  },
  addIcon: {
    position: "absolute",
    bottom: 10,
    right: 5,
  },
});
