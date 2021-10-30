import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import refreshTokenRoutes from "./routes/refreshToken.routes";
import seedRoutes from "./routes/seed.routes";
import productRoutes from "./routes/products.routes";
import testRoutes from "./routes/test.routes";

const app = express();
config();

app.use(express.json());

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/tokens", refreshTokenRoutes);
app.use("/api/admin", seedRoutes);
app.use("/api/products", productRoutes);
app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
  res.send("APP IS RUNNING...");
});

const PORT = `${process.env.PORT}` || 5000;

mongoose
  .connect(`${process.env.CONNECTION_URI}`)

  .then(() =>
    app.listen(`${PORT}`, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  )

  .catch((err) => console.log(err));
