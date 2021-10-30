import { Request, Response } from "express";
import Product from "../models/Product.model";
// DummyData
import { allProducts } from "../data/dummyData";

// Seed Products
export const seedProducts = async (req: Request, res: Response) => {
  // const products = req.body;
  try {
    await Product.deleteMany();
    await Product.insertMany(allProducts);

    res.status(201).json({ message: "Seeded Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
