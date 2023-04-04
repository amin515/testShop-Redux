import { createSlug } from "../helper/createSlug.js";
import Product from "../models/productModels.js";
import createError from "../utility/customError/createError.js";

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
    const { name, stock, short_desc, long_desc, regular_price, sale_price, photo } =
      req.body;

    // let gallery = [];
    // for (let i = 0; i < req.files.gallery.length; i++) {
    //   gallery.push(req.files.gallery[i].filename);
    // }
    const data = await Product.create({

      name,
      stock,
      short_desc,
      long_desc,
      regular_price,
      sale_price,
      slug: createSlug(name),
      photo: photo,
      // gallary: gallery,
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
    const { name, slug, photo } = req.body;

    const data = await Product.findByIdAndUpdate(
      id,
      { name, slug },
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

/**@edit multiple data
 * @status patch
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateMultipleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Product.findByIdAndUpdate(
      id,
      { name, slug },
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

    const data = await Cat.findByIdAndDelete(id);
    res.status(200).json({
      product: data,
      message: `${`successfuly delete ${data.name}`}`,
    });
  } catch (error) {
    next(createError(400, "user not found"));
  }
};
