import express, { Router } from "express";
import { generateAccessToken } from "../controllers/auth.controller";
import { verifyRefreshToken } from "../controllers/verifyRefreshToken";

const router = Router();

router.post("/refresh", verifyRefreshToken);

export default router;
