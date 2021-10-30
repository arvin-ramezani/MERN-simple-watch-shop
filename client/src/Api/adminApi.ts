import axios from "axios";

const base_url = "http://localhost:5000/api/admin/products/seed";

export const adminApi = axios.create({
  baseURL: base_url,
});
