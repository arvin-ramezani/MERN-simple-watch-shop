import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const router = Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

export default router;
