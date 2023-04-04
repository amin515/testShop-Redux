import express from "express";
import {
  createTag,
  deleteTag,
  getAllTag,
  getOneTag,
  updateMultipleTag,
  updateTag,
} from "../controller/tagController.js";

// router init
const router = express.Router();

router.get("/tag", getAllTag);
router.get("/tag/:slug", getOneTag);
router.post("/tag", createTag);
router.put("/tag/:id", updateTag);
router.patch("/tag/:id", updateMultipleTag);
router.delete("/tag/:id", deleteTag);

// export
export default router;
