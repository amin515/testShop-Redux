import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (
      file.fieldname === "product-photo" ||
      file.fieldname === "product-gallary"
    )
      cb(null, "api/public/product");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

export const productMulter = multer({ storage }).fields([
  {
    name: "product-photo",
    maxCount: 1,
  },
  {
    name: "product-gallary",
    maxCount: 10,
  },
]);
