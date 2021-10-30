import { Request, Response } from "express";
import Product from "../models/Product.model";

export const fetchAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Fetch Products By Category
export const fetchProductsByCategory = async (req: Request, res: Response) => {
  const category = req.params.category;
  let products;

  try {
    products = await Product.find({ categories: { $in: [category] } });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
