import { Router } from "express";
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from "../controllers/products.controller";

const router = Router();

// Get Products
router.get("/", fetchAllProducts);
router.get("/:category", fetchProductsByCategory);

export default router;
