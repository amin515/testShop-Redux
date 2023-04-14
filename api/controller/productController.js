import { createSlug } from "../helper/createSlug.js";
import Product from "../models/productModels.js";
import createError from "../utility/customError/createError.js";
import { unlinkSync } from "fs";
/**
 * @status get
 * @ get all categories
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const getAllProduct = async (req, res, next) => {
  try {
    const data = await Product.find();

    if (data) {
      res.status(200).json({
        product: data,
        message: "get all product successful",
      });
    }

    if (!data) {
      res.status(400).json({
        message: "no data found",
      });
    }
  } catch (error) {
    console.log(next(error.message));
  }
};

/**@status post
 * @ create category
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const createProduct = async (req, res, next) => {
  try {
    const { name, stock, short_desc, long_desc, regular_price, sale_price } =
      req.body;

    // single photo convert to original image
    const photo = req.files["product-photo"][0].filename;
    const gallary = [];

    [...req.files["product-gallary"]].forEach((item) => {
      gallary.push(item.filename);
    });

    const data = await Product.create({
      name,
      stock,
      short_desc,
      long_desc,
      regular_price,
      sale_price,
      slug: createSlug(name),
      photo: photo,
      gallary: gallary,
    });

    res.status(200).json({
      product: data,
      message: "Product added successful",
    });
  } catch (error) {
    next(error);
  }
};
/**
 * @get single category
 * @status get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getOneProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await Product.findOne({ slug });
    res.status(200).json({
      product: data,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @ edit single data
 * @status put
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, stock, short_desc, long_desc, regular_price, sale_price } =
      req.body;

    // product photo update
    const product = await Product.findById(id);
    let photo = product.photo;
    if (req.files["product-photo"]) {
      photo = req.files["product-photo"][0].filename;
      unlinkSync(`api/public/product/${product.photo}`);
    }

    // product update gallary
    let old_gallary = product.gallary;
    let new_gallary = [];
    if (req.files["product-gallary"]) {
     
      req.files["product-gallary"].forEach(item => {
        new_gallary.push(item.filename)
      });

    }

    const final_gallary = old_gallary.concat(new_gallary)

    const data = await product.updateOne({
      name,
      slug: createSlug(name),
      photo,
      gallary : final_gallary,
      stock,
      short_desc,
      long_desc,
      regular_price,
      sale_price,
    });

    res.status(200).json({
      product: data,
    });
  } catch (error) {
    next(error.message);
  }
};

/**@edit multiple data
 * @status patch
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateMultipleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, stock, short_desc, long_desc, regular_price, sale_price } =
      req.body;

    const data = await Product.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        stock,
        short_desc,
        long_desc,
        regular_price,
        sale_price,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      product: data,
    });
  } catch (error) {
    next(error.message);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Product.findByIdAndDelete(id);

    // delete related photo
    unlinkSync(`api/public/product/${data.photo}`);

    // delete related gallary photo
    data.gallary.forEach((item) => {
      unlinkSync(`api/public/product/${item}`);
    });
    res.status(200).json({
      product: data,
      message: `${`successfuly delete ${data.name}`}`,
    });
  } catch (error) {
    next(createError(400, "user not found"));
  }
};
