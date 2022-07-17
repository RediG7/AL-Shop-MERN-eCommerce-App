import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
// Like this
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
// Or like this:
// router.get("/", getProducts)
// router.get("/:id", getProductById);

export default router;
