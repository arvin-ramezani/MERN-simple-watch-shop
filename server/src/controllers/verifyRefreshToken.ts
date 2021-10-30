import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import redisClient from "../redisClient";
import { generateAccessToken } from "./auth.controller";

export const verifyRefreshToken = (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) return res.status(401).json("You Are Not Authenticated");

  jwt.verify(
    refreshToken,
    `${process.env.REFRESH_TOKEN_SEC_KEY}`,
    (err: any, userInfo: any) => {
      if (err) return res.status(403).json("Token Is Not Valid-refresh-jwt");

      redisClient.get(userInfo.id.toString(), (err, data) => {
        if (err) throw err;

        if (!data) res.status(403).json("Token Is Not Valid-refresh-redis");

        if (refreshToken === data) {
          const accessToken = generateAccessToken(
            userInfo.id,
            userInfo.isAdmin
          );

          res.status(200).json({ accessToken, refreshToken });
        } else {
          console.log(refreshToken, data);
        }
      });
    }
  );
};
