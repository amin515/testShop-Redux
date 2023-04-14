import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOneProduct,
  updateMultipleProduct,
  updateProduct,
} from "../controller/productController.js";
import { productMulter } from "../middlewares/productMulter.js";

// router init
const router = express.Router();

router.get("/", getAllProduct);
router.get("/:slug", getOneProduct);
router.post("/", productMulter, createProduct);
router.put("/:id", productMulter, updateProduct);
router.patch("/:id", updateMultipleProduct);
router.delete("/:id", deleteProduct);

// export
export default router;
