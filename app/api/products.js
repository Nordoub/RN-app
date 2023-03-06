import api from "./api";

const getAllProducts = async () => {
  const allProducts = await api.get("/products");
  console.log(allProducts.data);
};
const getProduct = async (id) => {
  const product = await api.get(`/products/${id}`);
  console.log(product.data);
};
const getAllCategories = async (id) => {
  const product = await api.get("/products/categories");
  console.log(product.data);
};
const getProductsFromCategory = async (category) => {
  const product = await api.get(`/products/category/${category}`);
  console.log(product.data);
};
const addProduct = async (product) => {
  const res = await api.post("/products", product);
  console.log(res);
};
const updateProduct = async (product) => {
  const res = await api.put("/products", product);
  console.log(res);
};
const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`, product);
  console.log(res);
};

export {
  getAllProducts,
  getProduct,
  getAllCategories,
  getProductsFromCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
