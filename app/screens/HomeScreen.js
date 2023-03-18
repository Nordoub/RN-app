import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import CategorySelect from "../components/products/CategorySelect";
import ProductCards from "../components/products/ProductCards";
import { getCertainAmountOfProducts } from "../api/products";

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
      <SearchBar placeholder={"Search products"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategorySelect />
        <ProductCards title={"Products"} products={products} />
        <ProductCards title={"Clothing"} products={products} />
        <ProductCards title={"Clothing"} products={products} />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
