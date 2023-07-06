import api from "./api";

const getAllProducts = async () => {
  const allProducts = await api.get("/products");
  return allProducts.data;
};
const getCertainAmountOfProducts = async (amount) => {
  const products = await api.get(`/products?limit=${amount}`);
  return products.data;
};

const getProduct = async (id) => {
  const product = await api.get(`/products/${id}`);
};
const getAllCategories = async (id) => {
  const product = await api.get("/products/categories");
};
const getProductsFromCategory = async (category) => {
  const product = await api.get(`/products/category/${category}`);
};
const addProduct = async (product) => {
  const res = await api.post("/products", product);
};
const updateProduct = async (product) => {
  const res = await api.put("/products", product);
};
const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`, product);
};

export {
  getAllProducts,
  getProduct,
  getCertainAmountOfProducts,
  getAllCategories,
  getProductsFromCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
