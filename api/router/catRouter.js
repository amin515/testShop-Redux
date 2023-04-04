import express from "express";
import {
  createCategory,
  deleteCat,
  getAllCategory,
  getOneCat,
  updateCategory,
  updateMultipleCategory,
} from "../controller/categoryController.js";
import { categoryMulter } from "../middlewares/catMulter.js";

// router init
const router = express.Router();

router.get("/category", getAllCategory);
router.get("/category/:slug", getOneCat);
router.post("/category", categoryMulter, createCategory);
router.put("/category/:id", updateCategory);
router.patch("/category/:id", updateMultipleCategory);
router.delete("/category/:id", deleteCat);

// export
export default router;
