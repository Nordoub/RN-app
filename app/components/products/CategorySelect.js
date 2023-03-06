import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import productCategories from "../../shared/productCategories";
import ProductChip from "./ProductChip";

const CategorySelect = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productCategories}
        renderItem={({ item, index }) => (
          <ProductChip
            category={item.category}
            iconName={item.iconName}
            key={index}
          />
        )}
        // keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {/* {productCategories.map((item, index) => (
        <ProductChip
          category={item.category}
          iconName={item.iconName}
          key={index}
        />
      ))} */}
    </View>
  );
};

export default CategorySelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
  },
});
