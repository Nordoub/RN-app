import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import HeaderText from "../text/HeaderText";
import Divider from "../Divider";
import ProductHeader from "./ProductHeader";

const ProductCards = ({ title, products }) => {
  return (
    <View>
      <View style={$.textHeaderRow}>
        <HeaderText title={title} style={[$.header, $.leftTextHeader]} />
        <TouchableOpacity>
          <HeaderText
            title={"See more"}
            style={[$.header, $.rightTextHeader]}
          />
        </TouchableOpacity>
      </View>
      {/* <ProductHeader title={title} /> */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
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

const $ = StyleSheet.create({
  header: {
    // marginTop: 10,
    // marginBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "400",
    // opacity: 0.7,
    // fontSize: 22,
    // backgroundColor: "yellow",
  },
  leftTextHeader: {},
  rightTextHeader: {
    fontSize: 16,
    opacity: 0.5,
  },
  textHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
