import { Request, Response } from "express";
import Product, { IProduct } from "../models/product";

export async function createProduct(req: Request, res: Response) {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function getProduct(req: Request, res: Response) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}






