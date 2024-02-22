import express from "express";
import productController from "../controller/products/productController";
import { auth } from "../middlewares/auth";
import admin from "../middlewares/admin";
import upload from "../middlewares/upload";
export const productRouter = express.Router();
// post route for adding product
productRouter.post('/', [auth, admin, upload.single('image')], productController.addProduct)
// get all products
productRouter.get('/', productController.getAllProducts)
// get single product 
productRouter.get('/:id', productController.getProduct)
// update product
productRouter.put('/:id', [auth, admin], productController.updateProduct)
// delete product
productRouter.delete('/:id', [auth, admin], productController.deleteProduct)
