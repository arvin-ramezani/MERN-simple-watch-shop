import { Router } from "express";
import { seedProducts } from "../controllers/seed.controllers";
import { verifyTokenAndAdmin } from "../middlewares/veifyToken";

const router = Router();

router.get("/products/seed", seedProducts);

export default router;
