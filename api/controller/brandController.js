import { createSlug } from "../helper/createSlug.js";
import Brand from "../models/brandModels.js";
import createError from "../utility/customError/createError.js";

/**
 * @status get
 * @ get all categories
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const getAllBrand = async (req, res, next) => {
  try {
    const data = await Brand.find();

    if (data) {
      res.status(200).json({
        brand: data,
        message: "get all brand successful",
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

export const createBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;

    const data = await Brand.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: data,
      message: "Brand added successful",
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
export const getOneBrand = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const data = await Brand.findOne({ slug });
    res.status(200).json({
      brand: data,
    });
  } catch (error) {
    console.log(next(error));
  }
};

/**
 * @ edit single data
 * @status put
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Brand.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );
    res.status(200).json({
      brand: data,
    });
  } catch (error) {
    console.log(next(error.message));
  }
};

/**@edit multiple data
 * @status patch
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const updateMultipleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;
    const data = await Brand.findByIdAndUpdate(
      id,
      { name, slug },
      {
        new: true,
      }
    );
    res.status(200).json({
      brand: data,
    });
  } catch (error) {
    console.log(next(error.message));
  }
};

export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      brand: data,
      message: `${`successfuly delete ${data.name}`}`,
    });
  } catch (error) {
    next(createError(400, "user not found"));
  }
};
