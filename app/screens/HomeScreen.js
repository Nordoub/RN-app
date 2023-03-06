import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import ProductChip from "../components/products/ProductChip";
import CategorySelect from "../components/products/CategorySelect";
import ProductCard from "../components/products/ProductCard";
import ProductCards from "../components/products/ProductCards";
import { getCertainAmountOfProducts } from "../api/products";
import Divider from "../components/Divider";

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
        <Divider />
        <ProductCards title={"Clothing"} products={products} />
        <ProductCards title={"Clothing"} products={products} />
        <ProductCards title={"Clothing"} products={products} />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
