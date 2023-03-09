import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import HeaderText from "../text/HeaderText";
import Divider from "../Divider";
import ProductHeader from "./ProductHeader";

const ProductCards = ({ title, products }) => {
  return (
    <View>
      {/* <HeaderText title={title} style={styles.header} /> */}
      <ProductHeader title={title} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {products.map((product) => (
          <ProductCard
            title={product.title}
            description={product.description}
            imgUrl={product.image}
            price={product.price}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductCards;

const styles = StyleSheet.create({
  // header: {
  //   marginTop: 10,
  //   marginBottom: 5,
  //   opacity: 0.7,
  //   fontSize: 22,
  // },
});
