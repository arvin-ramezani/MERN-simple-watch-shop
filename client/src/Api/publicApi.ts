import axios from "axios";
import { IProduct } from "../interfaces/interfaces";

const base_url = "http://localhost:5000/api";

const publicRequestApi = axios.create({
  baseURL: base_url,
});

export const fetchProducts = () =>
  publicRequestApi.get<IProduct[]>("/products");

export const fetchProductsByCategory = (cat: string) =>
  publicRequestApi.get<IProduct[]>(`/products/${cat}`);
