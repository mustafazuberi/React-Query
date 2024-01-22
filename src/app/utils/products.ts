import { API_BASE_URL } from "../constants";
import Product from "../types/types.product";

export const fetchProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/products`);
  const { products } = await res.json();
  return products as Product[];
};

export const fetchProduct = async (id: string) => {
  const res = await fetch(`${API_BASE_URL}/product/${id}`);
  const product = await res.json();
  return product as Product;
};
