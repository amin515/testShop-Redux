import express from "express";


import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getOneBrand,
  updateBrand,
  updateMultipleBrand,

} from "../controller/brandController.js";
import { brandMulter } from "../middlewares/brandMulter.js";

// router init
const router = express.Router();

router.get("/brands", getAllBrand);
router.get("/brands/:slug", getOneBrand);
router.post("/brands", brandMulter, createBrand);
router.put("/brands/:id", updateBrand);

router.patch("/brands/:id", updateMultipleBrand);
router.delete("/brands/:id", deleteBrand);

// export
export default router;
