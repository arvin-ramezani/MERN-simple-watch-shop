import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    res.status(401).json("You Are Not Authenticated");
  } else {
    jwt.verify(
      accessToken,
      `${process.env.ACCESS_TOKEN_SEC_KEY}`,
      (err, userInfo) => {
        if (err) {
          console.log(err);
          res.status(403).json("Token Is Not Valid");
        } else {
          console.log(err, userInfo);
          res.locals.userInfo = userInfo;
          next();
        }
      }
    );
  }
};

export const verifyTokenAndAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyAccessToken(req, res, () => {
    console.log(res.locals.user);
    res.locals.user.isAdmin
      ? next()
      : res.status(403).json({ message: "You Are Not Admin" });
  });
};
