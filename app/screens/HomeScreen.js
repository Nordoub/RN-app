import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import CategorySelect from "../components/products/CategorySelect";
import ProductCards from "../components/products/ProductCards";
import { getCertainAmountOfProducts } from "../api/products";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await getCertainAmountOfProducts(2);
    setProducts(res);
  };

  return (
    <Screen>
      <View style={$.topRow}>
        <SearchBar placeholder={"Search products"} />
        <SimpleLineIcons name="handbag" size={24} color="black" />
        <Ionicons
          name="chatbox-ellipses-outline"
          size={26}
          color="black"
          style={$.lastIcon}
        />
      </View>
      <CategorySelect />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <ProductCards title={"Products"} products={products} />
        <ProductCards title={"Clothing"} products={products} />
        <ProductCards title={"Clothing"} products={products} />
      </ScrollView> */}
    </Screen>
  );
};

export default HomeScreen;

const $ = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 20,
    marginBottom: 5,
  },
  lastIcon: {
    marginRight: 10,
  },
});
