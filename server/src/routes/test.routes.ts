import { Router } from "express";
import { verifyAccessToken } from "../middlewares/veifyToken";

const router = Router();

router.post("/", verifyAccessToken, (req, res) => {
  res.status(200).json("Successfull");
});

export default router;
